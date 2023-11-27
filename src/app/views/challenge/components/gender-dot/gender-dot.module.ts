import {NgModule} from '@angular/core';
import {GenderDotComponent} from './gender-dot.component';
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [GenderDotComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [GenderDotComponent],
})
export class GenderDotModule {
}
