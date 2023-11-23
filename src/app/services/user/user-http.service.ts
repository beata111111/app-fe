import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@model";
import { AppHttpService } from "@core";

@Injectable({ providedIn: "root" })
export class UserHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadUser(): Observable<User> {
    const url = "/api/get-user";

    return this._appHttpService.makeGETRequest<User>(url);
  }

  updateUser(update: Record<string, unknown>): Observable<User> {
    const data = {
      update,
    };

    const url = "/api/update-user";
    return this._appHttpService.makePOSTRequest<User>(url, data);
  }
}
