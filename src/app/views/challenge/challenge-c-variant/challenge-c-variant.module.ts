import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";
import {ChallengeCVariantMiddleSectionComponent} from "./middle-section/middle-section.component";
import {ChallengeCVariantBottomSectionComponent} from "./bottom-section/bottom-section.component";
import {ChallengeCVariantComponent} from "./challenge-c-variant.component";
import {ChallengeComponentsModule} from "@challengeComponents";

@NgModule({
  declarations: [
    ChallengeCVariantComponent,
    ChallengeCVariantMiddleSectionComponent,
    ChallengeCVariantBottomSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    ChallengeComponentsModule,
    ChallengeComponentsModule,
  ],
  exports: [
    ChallengeCVariantComponent,
  ]
})
export class ChallengeCVariantModule {}
