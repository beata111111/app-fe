import {Injectable} from "@angular/core";
import {Observable, shareReplay, Subject, tap} from "rxjs";
import {User} from "@model";
import {UserService} from "@services";
import {CurrentUserService} from "@auth";

@Injectable({ providedIn: 'root' })
export class UserStateService {

  private _userState$ = new Subject<User>();
  userState$ = this._userState$.asObservable().pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
  );

  constructor(
    private _userService: UserService,
    private _currentUser: CurrentUserService,
  ) {
    this._currentUser.currentUserId$.subscribe(_ => {
      this.getState();
    });
  }

  getState() {
    this._userService.getState().subscribe((user) => {
      this._userState$.next(user);
    })
  }

  updateState(userUpdate: User): Observable<User> {
    return this._userService.updateLocalData(userUpdate).pipe(
      tap(() => {
        this.getState();
      })
    );
  }
}
