import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WordDTO } from "@model";
import { AppHttpService } from "@core";

@Injectable({ providedIn: "root" })
export class ChallengeDataHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadWords(category_id: string, level_id: string): Observable<WordDTO[]> {
    const url = "/api/get-words";
    const params = { category_id, level_id };

    return this._appHttpService.makeGETRequest<WordDTO[]>(url, params);
  }
}
