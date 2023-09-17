import {NgModule} from '@angular/core';

import {GenderDotComponent} from './gender-dot.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [GenderDotComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [GenderDotComponent],
})
export class GenderDotModule {
}
