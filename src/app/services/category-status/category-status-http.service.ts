import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryStatus, ChallengeResult} from "@model";
import {AppHttpService} from "../../core";

@Injectable({ providedIn: 'root' })
export class CategoryStatusHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadCategoryStatus(): Observable<CategoryStatus[]>  {
    const url = '/api/get-category-status';

    return this._appHttpService.makeGETRequest<CategoryStatus[]>(url);
  };

  updateCategoryStatus(challengeResult: ChallengeResult): Observable<CategoryStatus> {
    const url = '/api/update-category-status';
    const data = { ...challengeResult };
    return this._appHttpService.makePOSTRequest<CategoryStatus>(url, data);
  };
}
