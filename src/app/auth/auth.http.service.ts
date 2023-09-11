import {Injectable} from '@angular/core';
import {AppHttpService} from "@services-tech";
import {AuthResponse} from "@model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthHttpService {

  constructor(private _appHttpService: AppHttpService) {
  }

  createUser(name: string, password: string): Observable<AuthResponse> {
    const url = "/api/create-user";
    const data = {
      name,
      password,
    };

    return this._appHttpService.makePOSTRequest<AuthResponse>(url, data);
  }

  logIn(name: string, password: string): Observable<AuthResponse> {
    const url = "/api/login-user";
    const data = {
      name,
      password,
    };

    return this._appHttpService.makePOSTRequest<AuthResponse>(url, data);
  }
}
