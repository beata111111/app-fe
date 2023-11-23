import { Injectable } from "@angular/core";
import { RecordsInfo } from "@model";
import { Observable } from "rxjs";
import { RecordsHttpService } from "./records.http.service";

@Injectable({ providedIn: "root" })
export class RecordsService {
  recordsInfo$: Observable<RecordsInfo>;

  constructor(private _recordsHttpService: RecordsHttpService) {
    this.recordsInfo$ = this._recordsHttpService.loadRecords();
  }
}
