import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserQueuedWord} from "@model";
import {AppHttpService} from "@services-tech";

@Injectable({ providedIn: 'root' })
export class QueueHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  getQueue(): Observable<UserQueuedWord[]> {
    const url = '/api/get-queue';

    return this._appHttpService.makeGETRequest<UserQueuedWord[]>(url);
  }
}
