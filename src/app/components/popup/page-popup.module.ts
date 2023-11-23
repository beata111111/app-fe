import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagePopupComponent } from "./page-popup.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@components";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [PagePopupComponent],
  imports: [CommonModule, FontAwesomeModule, ButtonModule, TranslateModule],
  exports: [PagePopupComponent],
})
export class PagePopupModule {}
