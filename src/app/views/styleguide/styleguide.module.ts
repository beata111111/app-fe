import {NgModule} from '@angular/core';
import {StyleguideComponent} from './styleguide.component'
import {CommonModule} from "@angular/common";
import {StyleguideRoutingModule} from "./styleguide-routing.module";
import {MainMenuModule} from "../main/main-menu/main-menu.module";
import {ButtonModule} from "@components";
import {ChallengeComponentsModule} from "@challengeComponents";

@NgModule({
  declarations: [StyleguideComponent],
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    MainMenuModule,
    ButtonModule,
    ChallengeComponentsModule,
  ],
  providers: [],
  exports: [StyleguideComponent],
})
export class StyleguideModule {
}
