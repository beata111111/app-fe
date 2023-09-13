import {Injectable} from '@angular/core';
import {AuthHttpService} from "./auth.http.service";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {CurrentUserService} from "./current-user.service";
import jwt_decode from "jwt-decode";
import {AuthResponse} from "@model";
const TOKEN = 'token';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private _authHttpService: AuthHttpService,
    private _router: Router,
    private _currentUserService: CurrentUserService,
  ) {
    const token = localStorage.getItem(TOKEN);
    if (token) this.setToken(token);
  }

  private _token: string | null = null;

  getToken() {
    return this._token;
  }

  setToken(token: string): void {
    this._token = token;
    localStorage.setItem(TOKEN, token);
    this._currentUserService.setCurrentUser(jwt_decode(token));
  }

  clearToken() {
    this._token = null;
    localStorage.removeItem(TOKEN);
    this._currentUserService.clearCurrentUser();
  }

  createUser(name: string, password: string): Observable<AuthResponse> {
    return this._authHttpService.createUser(name, password).pipe(
      tap((authResponse) => {
        this.setToken(authResponse.token);
        this._router.navigate(['main']);
      }),
    );
  }

  logIn(name: string, password: string): Observable<AuthResponse> {
    return this._authHttpService.logIn(name, password).pipe(
      tap((authResponse) => {
        this.setToken(authResponse.token);
        this._router.navigate(['main']);
      }),
    );
  }

  logout() {
    this.clearToken();
    this._router.navigate(['auth']);
  }
}
