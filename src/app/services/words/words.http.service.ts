import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Word} from "@model";
import {AppHttpService} from "@services-tech";

@Injectable({ providedIn: 'root' })
export class WordsHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadWords(categoryId?: string, level?: number): Observable<Word[]> {
    const url = '/api/get-words';
    const params = categoryId && level ? { categoryId, level } : {};

    return this._appHttpService.makeGETRequest<Word[]>(url, params);
  };
}
