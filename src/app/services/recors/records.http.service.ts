import { Injectable } from "@angular/core";
import { AppHttpService } from "@core";
import { RecordsInfo } from "@model";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class RecordsHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadRecords(): Observable<RecordsInfo> {
    const url = "/api/get-records";

    return this._appHttpService.makeGETRequest<RecordsInfo>(url);
  }
}
