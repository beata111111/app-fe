import {Injectable} from "@angular/core";
import {AppHttpService} from "@core";
import {Record} from "@model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecordsHttpService {

  constructor(private _appHttpService: AppHttpService) {}

  loadRecords(): Observable<Record[]> {
    const url = '/api/get-records';

    return this._appHttpService.makeGETRequest<Record[]>(url);
  }
}