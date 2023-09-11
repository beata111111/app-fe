import {Injectable} from '@angular/core';
import {CurrentUser} from "@model";
import {BehaviorSubject, filter, map} from "rxjs";

@Injectable({ providedIn: 'root' })
export class CurrentUserService {

  private _currentUser$ = new BehaviorSubject<CurrentUser | null>(null);
  currentUser$ = this._currentUser$.asObservable();
  currentUserId$ = this._currentUser$.pipe(
    filter(currentUser => !!currentUser),
    map(currentUser => currentUser!.userId)
  );

  setCurrentUser(currentUser: CurrentUser): void {
    this._currentUser$.next(currentUser);
  }

  clearCurrentUser() {
    this._currentUser$.next(null);
  }

  getCurrentUserId() {
    try {
      return this._currentUser$.value!.userId;
    } catch(e) {
      throw('current user not set!');
    }
  }
}
