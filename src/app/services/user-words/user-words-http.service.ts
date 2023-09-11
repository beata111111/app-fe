import { Injectable } from '@angular/core';
import {AppHttpService} from "@services-tech";

@Injectable({ providedIn: 'root' })
export class UserWordsHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  getWordsForUser( categoryId?: string, level?: number): any {
    const url = '/api/get-user-words';
    const params = categoryId && level ? { categoryId, level } : {};

    return this._appHttpService.makeGETRequest(url, params);
  }
}
