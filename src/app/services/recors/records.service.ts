import {Injectable} from "@angular/core";
import {Record} from "@model";
import {Observable} from "rxjs";
import {RecordsHttpService} from "./records.http.service";

@Injectable({ providedIn: 'root' })
export class RecordsService {

  records$: Observable<Record[]>;

  constructor(private _recordsHttpService: RecordsHttpService) {
    this.records$ = this._recordsHttpService.loadRecords();
  }
}