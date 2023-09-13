import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryStatus, LevelStatus, User} from "@model";
import {AppHttpService} from "../../core";

@Injectable({ providedIn: 'root' })
export class CategoryStatusHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadCategoryStatus(): Observable<CategoryStatus[]>  {
    const url = '/api/get-category-status';

    return this._appHttpService.makeGETRequest<CategoryStatus[]>(url);
  };

  updateCategoryStatus(categoryId: string, level: string, variant: string, result: number): Observable<CategoryStatus> {
    const url = '/api/update-category-status';
    const data = { categoryId, level, variant, result };

    console.log(data);

    return this._appHttpService.makePOSTRequest<CategoryStatus>(url, data);
  };
}
