import {Component, OnDestroy} from "@angular/core";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import {Observable, Subscription} from "rxjs";
import { RecordsInfo } from "@model";
import {RecordsService, UserService} from "@services";

@Component({
  selector: "app-records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.scss"],
})
export class RecordsComponent implements OnDestroy {
  recordsInfo$: Observable<RecordsInfo>;
  faArrowRightFromBracket = faArrowRightFromBracket;

  userName = "";
  private _subscription = new Subscription();

  constructor(
    private _router: Router,
    private _recordService: RecordsService,
    private _userService: UserService,
  ) {
    this.recordsInfo$ = this._recordService.recordsInfo$;

    this._subscription.add(
      this._userService.loggedInUser$.subscribe((user) => {
        this.userName = user.name;
      }),
    );
  }

  back() {
    this._router.navigate(["/main"]);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
