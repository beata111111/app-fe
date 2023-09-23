import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";
import {ChallengeBVariantMiddleSectionComponent} from "./middle-section/middle-section.component";
import {ChallengeBVariantBottomSectionComponent} from "./bottom-section/bottom-section.component";
import {ChallengeBVariantComponent} from "./challenge-b-variant.component";
import {ChallengeComponentsModule} from "@challengeComponents";

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
    ChallengeComponentsModule,
  ],
  exports: [
    ChallengeBVariantComponent,
  ]
})
export class ChallengeBVariantModule {}
