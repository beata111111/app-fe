import { Component } from '@angular/core';
import { AbstractPopupDialogDirective } from "../abstract/abstract-popup-dialog.directive";

@Component({
  selector: 'app-popup-dialog-welcome',
  templateUrl: './popup-dialog-welcome.component.html',
  styleUrls: ['./popup-dialog-welcome.component.scss']
})
export class PopupDialogWelcomeComponent extends AbstractPopupDialogDirective {
  currentStep = 1;
  stepsCount = 3;

  applyConfig(config: any) {
    this.config.nextButtonText = config.nextButtonText;
    this.config.backButtonText = config.backButtonText;
  }
}
