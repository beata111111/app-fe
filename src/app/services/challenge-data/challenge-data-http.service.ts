import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {WordDTO} from "@model";
import {AppHttpService} from "@core";

@Injectable({ providedIn: 'root' })
export class ChallengeDataHttpService {

  constructor(private _appHttpService: AppHttpService) {}

  loadWords(categoryId: string, level: string): Observable<WordDTO[]> {
    const url = '/api/get-words';
    const params = { categoryId, level };

    return this._appHttpService.makeGETRequest<WordDTO[]>(url, params);
  };
}


