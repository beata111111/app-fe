import { Component, OnInit } from "@angular/core";
import { AbstractPopupDialogStepDirective } from "../../../abstract/abstract-popup-dialog-step.directive";

@Component({
  selector: "app-welcome-first-step",
  templateUrl: "./welcome-first-step.component.html",
  styleUrls: ["./welcome-first-step.component.scss"],
})
export class WelcomeFirstStepComponent
  extends AbstractPopupDialogStepDirective
  implements OnInit
{
  ngOnInit() {
    this.config.emit({
      title: "step 1",
      showBackButton: false,
      nextButtonText: "hallo",
      backButtonText: "world",
    });
  }
}
