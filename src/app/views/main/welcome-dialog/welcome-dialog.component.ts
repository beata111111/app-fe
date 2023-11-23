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
        const showModal = user.infoStatus?.welcomeInfo !== true;
        setTimeout(() => {
          this.showModal = showModal;
        }, 1000);
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
