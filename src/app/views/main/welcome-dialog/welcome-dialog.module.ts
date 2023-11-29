import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagePopupModule, PopupDialogWelcomeModule } from "@components";
import { WelcomeDialogComponent } from "./welcome-dialog.component";

// prettier-ignore
@NgModule({
  declarations: [WelcomeDialogComponent],
  imports: [CommonModule, PagePopupModule, PopupDialogWelcomeModule],
  exports: [WelcomeDialogComponent],
})
export class WelcomeDialogModule {}
