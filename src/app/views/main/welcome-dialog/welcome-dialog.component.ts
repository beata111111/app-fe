import { Component, OnDestroy } from "@angular/core";
import { UserService } from "@services";
import { Subscription } from "rxjs";

@Component({
  selector: "app-welcome-dialog",
  templateUrl: "./welcome-dialog.component.html",
  styleUrls: ["./welcome-dialog.component.scss"],
})
export class WelcomeDialogComponent implements OnDestroy {
  showModal = false;
  private _subscription = new Subscription();

  constructor(private _userService: UserService) {
    this._subscription.add(
      this._userService.loggedInUser$.subscribe((user) => {
        this.showModal = user.infoStatus?.welcomeInfo !== true;
        this._subscription.unsubscribe();
      }),
    );
  }

  closeModal(): void {
    this.showModal = false;
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
