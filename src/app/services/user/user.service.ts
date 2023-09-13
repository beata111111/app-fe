import {Injectable} from "@angular/core";
import {UserHttpService} from "@services";
import {CurrentUserService} from "../../core/auth";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private _userHttpService: UserHttpService,
    private _currentUserService: CurrentUserService,
  ) {
  }
}
