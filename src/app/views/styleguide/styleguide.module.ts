import { NgModule } from "@angular/core";
import { StyleguideComponent } from "./styleguide.component";
import { CommonModule } from "@angular/common";
import { StyleguideRoutingModule } from "./styleguide-routing.module";
import { MainMenuModule } from "../main/main-menu/main-menu.module";
import { ButtonModule } from "@components";
import { ChallengeComponentsModule } from "@challengeComponents";
import { StyleguideSectionComponent } from "./styleguide-section/styleguide-section.component";
import {GenderDotComponent} from "../challenge/components/gender-dot/gender-dot.component";
import {GenderDotModule} from "../challenge/components/gender-dot/gender-dot.module";

@NgModule({
  declarations: [StyleguideComponent, StyleguideSectionComponent],
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    MainMenuModule,
    ButtonModule,
    ChallengeComponentsModule,
    GenderDotModule,
  ],
  providers: [],
  exports: [StyleguideComponent],
})
export class StyleguideModule {}
