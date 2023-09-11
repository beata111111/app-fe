import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppHttpService {
  constructor(private _http: HttpClient) {}

  makeGETRequest<T>(url: string, params: unknown = {}): Observable<T> {
    return this._http.get<T>(url, { params: params as HttpParams })
  }

  makePOSTRequest<T>(url: string, data = {}, params: unknown = {}): Observable<T> {
    return this._http.post<T>(url, data, { params: params as HttpParams })
  }
}
