import {Injectable} from "@angular/core";
import {QueueStateService} from "../queue/queue-state.service";
import {UserStateService} from "../user/user-state.service";
import {UserWordsStateService} from "../user-words/user-words-state.service";
import {combineLatest, filter, forkJoin, map, Observable, tap, throttle} from "rxjs";
import {AppState, Word, AppActions, UserQueuedWord, User, UserWordsBundle} from "@model";
import {WordsStateService} from "../words/words-state.service";
import {QueueHelper, UserHelper, UserWordsHelper} from "@helpers";
import {AppStateHttpService} from "./app-state.http.service";

@Injectable({ providedIn: 'root' })
export class AppStateService {

  private _state!: AppState;
  state$: Observable<AppState>;

  words$: Observable<Word[]>;

  private _currentWord!: Word;
  currentWord$: Observable<Word>;

  constructor(
    private _userStateService: UserStateService,
    private _queueStateService: QueueStateService,
    private _userWordsStateService: UserWordsStateService,
    private _wordsStateService: WordsStateService,
    private _stateHttpService: AppStateHttpService
  ) {
    this.words$ = this._wordsStateService.wordsState$;

    this.state$ = combineLatest([
      _userStateService.userState$,
      _queueStateService.queueState$,
      _userWordsStateService.userWordsState$]).pipe(
        filter(([user, queue, userWords]) => {
          return AppStateService._isStateReady(user, queue, userWords);
        }),
        map(([user, queue, userWords]) => {
          return { user, queue, userWords }
        }),
        tap((state) => {
          this._state = state;
        }),
    )

    this.currentWord$ = combineLatest([this.state$, this.words$]).pipe(
      throttle(() => this._userStateService.userState$),
      map(([state, words]) => {
        const wordId = QueueHelper.getNextQueuedWord(state) || UserWordsHelper.getNextWord(state, this._currentWord?.wordId);
        return words.find(word => word.wordId === wordId) as Word;
      }),
      tap((newWord) => {
        this._currentWord = newWord;
      }),
    )
  }

  handleWordAction(action: AppActions): void {
    const word = this._currentWord;
    const state = this._state;
    const userWordsUpdate: UserWordsBundle = UserWordsHelper.updateAfterWordAction(state.userWords, word, action);
    const queueUpdate: UserQueuedWord = QueueHelper.updateAfterWordAction(state.user.currentStep, word, userWordsUpdate);
    const userUpdate: User = UserHelper.updateAfterWordAction(state.user, word, userWordsUpdate);

    forkJoin([
      this._queueStateService.updateState(queueUpdate),
      this._userStateService.updateState(userUpdate),
      this._userWordsStateService.updateState(userWordsUpdate)
    ]).subscribe(() => {
      this._stateHttpService.saveAppState(userUpdate, [queueUpdate], userWordsUpdate);
    });
  }

  updateActiveCategories(categoryId: string, isActive: boolean) {
    const userUpdate: User = UserHelper.updateUserActiveCategories(this._state.user, categoryId, isActive);
    const queueUpdate: UserQueuedWord[] = QueueHelper.updateAfterChangingActiveCategory(this._state.queue, userUpdate);

    forkJoin([
      this._queueStateService.updateStateBulk(queueUpdate),
      this._userStateService.updateState(userUpdate)
    ]).subscribe(() => {
      this._stateHttpService.saveAppState(userUpdate, queueUpdate);
    });
  }

  private static _isStateReady(user: User, queue: UserQueuedWord[], userWords: UserWordsBundle[]) {
    return (!!queue.length && !!userWords.length) || (user.currentStep === 1 && !queue.length && !!userWords.length);
  }
}
