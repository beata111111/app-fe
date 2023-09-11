import {NgModule} from '@angular/core';

import {PopupComponent} from "./popup.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [PopupComponent],
  imports: [FontAwesomeModule],
  providers: [],
  exports: [PopupComponent],
})
export class PopupModule {
}
