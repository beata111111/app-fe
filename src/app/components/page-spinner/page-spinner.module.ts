import { NgModule } from "@angular/core";
import { PageSpinnerComponent } from "./page-spinner.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// prettier-ignore
@NgModule({
  declarations: [PageSpinnerComponent],
  imports: [FontAwesomeModule],
  providers: [],
  exports: [PageSpinnerComponent],
})
export class PageSpinnerModule {}
