import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "@model";
import {AppHttpService} from "@services-tech";

@Injectable({ providedIn: 'root' })
export class UserHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadUser = (): Observable<User> => {
    const url = '/api/get-user';

    return this._appHttpService.makeGETRequest<User>(url);
  };

  setCategoryToUser(userId: string, categories: string[]): Observable<User> {
    const url = '/api/set-active-categories';
    const data = {
      categories,
    };

    return this._appHttpService.makePOSTRequest<User>(url, data);
  }
}
