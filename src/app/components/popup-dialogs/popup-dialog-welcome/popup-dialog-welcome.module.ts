import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupDialogWelcomeComponent} from "./popup-dialog-welcome.component";
import { WelcomeFirstStepComponent } from './steps/welcome-first-step/welcome-first-step.component';
import { WelcomeSecondStepComponent } from './steps/welcome-second-step/welcome-second-step.component';
import { WelcomeThirdStepComponent } from './steps/welcome-third-step/welcome-third-step.component';

@NgModule({
  declarations: [
    PopupDialogWelcomeComponent,
    WelcomeFirstStepComponent,
    WelcomeSecondStepComponent,
    WelcomeThirdStepComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PopupDialogWelcomeComponent]
})
export class PopupDialogWelcomeModule { }
