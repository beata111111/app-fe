import {NgModule} from '@angular/core';
import {DiamondCounterComponent} from './diamond-counter.component';
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DiamondCounterService} from "./diamond-counter.service";
import {ButtonModule, ShineAnimationModule} from "@components";
import {RouterModule} from "@angular/router";
import {DiamondIconModule} from "../../../components/diamond-icon/diamond-icon.module";

@NgModule({
  declarations: [DiamondCounterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    ShineAnimationModule,
    RouterModule,
    DiamondIconModule,
  ],
  providers: [DiamondCounterService],
  exports: [DiamondCounterComponent],
})
export class DiamondCounterModule {
}
