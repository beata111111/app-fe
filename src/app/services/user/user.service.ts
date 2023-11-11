import { Injectable } from "@angular/core";
import { UserHttpService } from "@services";
import { CurrentUserService } from "@core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { User, UserPointsUpdate } from "@model";

@Injectable({ providedIn: "root" })
export class UserService {
  private _userSubscription = new Subscription();
  private _user$ = new BehaviorSubject<User | null>(null);
  user$ = this._user$.asObservable();

  constructor(
    private _userHttpService: UserHttpService,
    private _currentUserService: CurrentUserService,
  ) {
    this._currentUserService.currentUser$.subscribe((user) => {
      if (user) {
        this._userSubscription = this._userHttpService
          .loadUser()
          .subscribe((data) => {
            this._user$.next(data);
          });
      } else {
        this._user$.next(null);
        this._userSubscription.unsubscribe();
      }
    });
  }

  getUserData(): Observable<User> {
    return this._userHttpService.loadUser();
  }

  updateUserPoint(userPointsUpdate: UserPointsUpdate): void {
    const user = this._user$.value;
    if (user) {
      const newUser = {
        ...user,
        ...userPointsUpdate,
      };
      this._user$.next(newUser);
    }
  }
}
