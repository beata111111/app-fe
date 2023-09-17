import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";
import {ShowAnswerOverlayModule} from "@challengeComponents";
import {ChallengeBVariantMiddleSectionComponent} from "./middle-section/middle-section.component";
import {ChallengeBVariantBottomSectionComponent} from "./bottom-section/bottom-section.component";
import {ChallengeBVariantComponent} from "./challenge-b-variant.component";
import {WordGapModule} from "../components/word-gap/word-gap.module";
import {GenderDotModule} from "../components/gender-dot/gender-dot.module";

@NgModule({
  declarations: [
    ChallengeBVariantComponent,
    ChallengeBVariantMiddleSectionComponent,
    ChallengeBVariantBottomSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    ShowAnswerOverlayModule,
    WordGapModule,
    GenderDotModule,
  ],
  exports: [
    ChallengeBVariantComponent,
  ]
})
export class ChallengeBVariantModule { }
