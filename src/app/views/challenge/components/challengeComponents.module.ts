import {NgModule} from '@angular/core';
import {GenderDotComponent} from "./gender-dot/gender-dot.component";
import {HistoryBackButtonComponent} from "./history-back-button/history-back-button.component";
import {HistoryForwardButtonComponent} from "./history-forward-button/history-forward-button.component";
import {ShowAnswerOverlayComponent} from "./show-answer-overlay/show-answer-overlay.component";
import {WordGapComponent} from "./word-gap/word-gap.component";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";
import {ChallengeProgressComponent} from "./challenge-progress/challenge-progress.component";
import {ChallengeFinishedOverlayComponent} from "./challenge-finished-overlay/challenge-finished-overlay.component";

const components = [
  GenderDotComponent,
  HistoryBackButtonComponent,
  HistoryForwardButtonComponent,
  ShowAnswerOverlayComponent,
  WordGapComponent,
  ChallengeProgressComponent,
  ChallengeFinishedOverlayComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
  ],
  exports: components,
})
export class ChallengeComponentsModule {
}
