import { Component } from "@angular/core";
import { AbstractPopupDialogDirective } from "../abstract/abstract-popup-dialog.directive";
import { defaultPopupDialogConfig, PopupDialogConfig } from "../popup.model";
import { UserService } from "@services";

@Component({
  selector: "app-popup-dialog-welcome",
  templateUrl: "./popup-dialog-welcome.component.html",
  styleUrls: ["./popup-dialog-welcome.component.scss"],
})
export class PopupDialogWelcomeComponent extends AbstractPopupDialogDirective {
  currentStep = 1;
  stepsCount = 3;

  onClose() {
    const userInfo = { welcomeInfo: true };
    this._userService.updateUserInfoStatus(userInfo);
  }

  constructor(private _userService: UserService) {
    super();
  }

  applyConfig(config: Partial<PopupDialogConfig>): void {
    setTimeout(() => {
      const newConfig = { ...defaultPopupDialogConfig, ...config };
      this.config.title = newConfig.title;
      this.config.nextButtonText = newConfig.nextButtonText;
      this.config.backButtonText = newConfig.backButtonText;
      this.config.showNextButton = newConfig.showNextButton;
      this.config.showBackButton = newConfig.showBackButton;
    });
  }
}
