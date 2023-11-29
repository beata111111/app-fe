import { Component, OnInit } from "@angular/core";
import { AbstractPopupDialogStepDirective } from "../../../abstract/abstract-popup-dialog-step.directive";
import { UserService } from "@services";
import { Observable } from "rxjs";
import { User } from "@model";

@Component({
  selector: "app-welcome-first-step",
  templateUrl: "./welcome-first-step.component.html",
  styleUrls: ["./welcome-first-step.component.scss"],
})
export class WelcomeFirstStepComponent extends AbstractPopupDialogStepDirective implements OnInit {
  user$: Observable<User>;

  constructor(private _userService: UserService) {
    super();
    this.user$ = this._userService.user$ as Observable<NonNullable<User>>;
  }

  ngOnInit() {
    this.config.emit({
      showBackButton: false,
      nextButtonText: "popup.general.next",
    });
  }
}
