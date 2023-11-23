import { Component, OnInit } from "@angular/core";
import { AbstractPopupDialogStepDirective } from "../../../abstract/abstract-popup-dialog-step.directive";

@Component({
  selector: "app-welcome-second-step",
  templateUrl: "./welcome-second-step.component.html",
  styleUrls: ["./welcome-second-step.component.scss"],
})
export class WelcomeSecondStepComponent
  extends AbstractPopupDialogStepDirective
  implements OnInit
{
  ngOnInit() {
    this.config.emit({
      showBackButton: false,
      nextButtonText: "popup.general.next",
    });
  }
}
