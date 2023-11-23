import {Component, Input, OnDestroy} from "@angular/core";
import { RecordsInfo } from "@model";
import { UserService } from "@services";
import {Subscription} from "rxjs";

@Component({
  selector: "app-record-board",
  templateUrl: "./record-board.component.html",
  styleUrls: ["./record-board.component.scss"],
})
export class RecordBoardComponent implements OnDestroy {
  @Input() recordsInfo!: RecordsInfo;
  private _subscription = new Subscription();
  userName: string = ''

  constructor(private _userService: UserService) {
    this._subscription.add(
      this._userService.loggedInUser$
        .subscribe(user => {
          this.userName = user.name;
        })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
