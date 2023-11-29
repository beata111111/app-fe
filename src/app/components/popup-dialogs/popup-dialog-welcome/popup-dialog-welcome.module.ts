import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopupDialogWelcomeComponent } from "./popup-dialog-welcome.component";
import { WelcomeFirstStepComponent } from "./steps/welcome-first-step/welcome-first-step.component";
import { WelcomeSecondStepComponent } from "./steps/welcome-second-step/welcome-second-step.component";
import { WelcomeThirdStepComponent } from "./steps/welcome-third-step/welcome-third-step.component";
import { TranslateModule } from "@ngx-translate/core";

// prettier-ignore
@NgModule({
  declarations: [
    PopupDialogWelcomeComponent,
    WelcomeFirstStepComponent,
    WelcomeSecondStepComponent,
    WelcomeThirdStepComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [PopupDialogWelcomeComponent],
})
export class PopupDialogWelcomeModule {}
