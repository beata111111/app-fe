import {Injectable} from "@angular/core";
import {BehaviorSubject, filter} from "rxjs";
import {Word} from "@model";
import {WordsService} from "@services";
import {CurrentUserService} from "@auth";
import {UserStateObserver} from "@observers";

@Injectable({providedIn: 'root'})
export class WordsStateService {

  private _wordsState$ = new BehaviorSubject<Word[]>([]);
  wordsState$ = this._wordsState$.asObservable().pipe(
    filter(words => !!words.length)
  );

  constructor(
    private _wordsService: WordsService,
    private _currentUser: CurrentUserService,
    private _userStateObserver: UserStateObserver,
  ) {
    this._userStateObserver.newLevelActivated$.subscribe((n) => {
      this._loadNextWords(n.categoryId, n.level);
    });

    this._currentUser.currentUserId$.subscribe(_ => {
      this._wordsState$.next([]);
      this.getState();
    });
  }

  getState() {
    this._wordsService.getState().subscribe((words) => {
      this._wordsState$.next(words);
    })
  }

  _loadNextWords(categoryId: string, level: number) {
    this._wordsService.loadData(categoryId, level).subscribe((words) => {
      const state = this._wordsState$.value;
      this._wordsState$.next([...state, ...words]);
    });
  }
}
