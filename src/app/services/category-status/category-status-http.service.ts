import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryStatus, CategoryUpdate, ChallengeResult } from "@model";
import { AppHttpService } from "@core";

@Injectable({ providedIn: "root" })
export class CategoryStatusHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadCategoryStatus(): Observable<CategoryStatus[]> {
    const url = "/api/get-category-status";

    return this._appHttpService.makeGETRequest<CategoryStatus[]>(url);
  }

  updateCategoryStatus(challengeResult: ChallengeResult): Observable<CategoryUpdate> {
    const url = "/api/update-category-status";
    const data = { ...challengeResult };
    return this._appHttpService.makePOSTRequest<CategoryUpdate>(url, data);
  }
}
