import { Component, OnInit } from "@angular/core";
import { AbstractPopupDialogStepDirective } from "../../../abstract/abstract-popup-dialog-step.directive";

@Component({
  selector: "app-welcome-third-step",
  templateUrl: "./welcome-third-step.component.html",
  styleUrls: ["./welcome-third-step.component.scss"],
})
export class WelcomeThirdStepComponent extends AbstractPopupDialogStepDirective implements OnInit {
  ngOnInit() {
    this.config.emit({
      showBackButton: false,
      nextButtonText: "popup.general.lets.go",
    });
  }
}
