import {Injectable} from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  tap,
} from "rxjs";
import {UserWordsBundle} from "@model";
import {UserWordService} from "@services";
import {CurrentUserService} from "@auth";
import {UserStateObserver} from "@observers";

@Injectable({ providedIn: 'root' })
export class UserWordsStateService {

  private _userWordsState$ = new BehaviorSubject<UserWordsBundle[]>([]);
  userWordsState$ = this._userWordsState$.asObservable();

  constructor(
    private _userWordService: UserWordService,
    private _currentUser: CurrentUserService,
    private _userStateObserver: UserStateObserver,
  ) {
    this._userStateObserver.newLevelActivated$.subscribe((n) => {
      this._loadNextWordBundle(n.categoryId, n.level);
    });

    this._currentUser.currentUserId$.subscribe(_ => {
      this._userWordsState$.next([]);
      this.getState();
    });
  }

  getState() {
    this._userWordService.getState().subscribe((userWords: UserWordsBundle[]) => {
      this._userWordsState$.next(userWords);
    })
  }

  updateState(userWordsUpdate: UserWordsBundle): Observable<UserWordsBundle> {
    return this._userWordService.updateLocalData(userWordsUpdate).pipe(
      tap(() => {
        this.getState();
      })
    );
  }

  _loadNextWordBundle(categoryId: string, nextLevel: number) {
    this._userWordService.loadData(categoryId, nextLevel).subscribe(([bundle]) => {
      const state = this._userWordsState$.value;
      this._userWordsState$.next([...state, bundle])
    });
  }
}
