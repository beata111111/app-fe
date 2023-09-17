import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeAVariantComponent } from './challenge-a-variant.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";
import {ShowAnswerOverlayModule} from "@challengeComponents";
import {ChallengeAVariantMiddleSectionComponent} from "./middle-section/middle-section.component";
import {ChallengeAVariantBottomSectionComponent} from "./bottom-section/bottom-section.component";
import {GenderDotModule} from "../components/gender-dot/gender-dot.module";
import {WordGapModule} from "../components/word-gap/word-gap.module";

@NgModule({
  declarations: [
    ChallengeAVariantComponent,
    ChallengeAVariantMiddleSectionComponent,
    ChallengeAVariantBottomSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    ShowAnswerOverlayModule,
    GenderDotModule,
    WordGapModule,
  ],
  exports: [
    ChallengeAVariantComponent,
  ]
})
export class ChallengeAVariantModule { }
