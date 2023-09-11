import {Injectable} from "@angular/core";
import {iif, mergeMap, Observable, of, tap} from "rxjs";
import {UserIndexDbService} from "./user.indexDb.service";
import {UserHttpService} from "@services";
import {User} from "@model";
import {CurrentUserService} from "@auth";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private _userIndexDbService: UserIndexDbService,
    private _userHttpService: UserHttpService,
    private _currentUserService: CurrentUserService,
  ) {
  }

  getState(): Observable<User> {
    const userId = this._currentUserService.getCurrentUserId();
    return this.getLocalData(userId).pipe(
      mergeMap(v => iif(() => !!v, of(v), this._loadData()))
    );
  }

  getLocalData(id: string): Observable<User> {
    return this._userIndexDbService.getUser(id);
  }

  setLocalData(user: User): void {
    this._userIndexDbService.setUser(user);
  }

  updateLocalData(userUpdate: User): Observable<User> {
    return this._userIndexDbService.updateUser(userUpdate);
  }

  private _loadData(): Observable<User> {
    return this._loadUser().pipe(
      tap(user => this.setLocalData(user))
    );
  }

  private _loadUser(): Observable<User> {
    return this._userHttpService.loadUser();
  }
}
