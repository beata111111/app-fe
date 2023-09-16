import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeAVariantComponent } from './challenge-a-variant.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";
import {AnswerFeedbackComponent} from "./answer-feedback/answer-feedback.component";

@NgModule({
  declarations: [
    ChallengeAVariantComponent,
    MiddleSectionComponent,
    BottomSectionComponent,
    AnswerFeedbackComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
  ],
  exports: [
    ChallengeAVariantComponent,
  ]
})
export class ChallengeAVariantModule { }
