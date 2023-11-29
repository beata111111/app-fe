import { NgModule } from "@angular/core";
import { HistoryBackButtonComponent } from "./history-back-button/history-back-button.component";
import { HistoryForwardButtonComponent } from "./history-forward-button/history-forward-button.component";
import { ShowAnswerOverlayComponent } from "./show-answer-overlay/show-answer-overlay.component";
import { WordGapComponent } from "./word-gap/word-gap.component";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@components";
import { ChallengeProgressComponent } from "./challenge-progress/challenge-progress.component";
import { ChallengeFinishedOverlayComponent } from "./challenge-finished-overlay/challenge-finished-overlay.component";
import { ShowAnswerAnimationComponent } from "./show-answer-animation/show-answer-animation.component";
import { ChallengeSectionTopComponent } from "./challenge-section-top/challenge-section-top.component";
import { ChallengeSectionBottomComponent } from "./challenge-section-bottom/challenge-section-bottom.component";
import { WordAltComponent } from "./word-alt/word-alt.component";
import { GenderDotComponent } from "./gender-dot/gender-dot.component";
import { ChallengeWrapperComponent } from "./challenge-wrapper/challenge-wrapper.component";

const components = [
  HistoryBackButtonComponent,
  HistoryForwardButtonComponent,
  ShowAnswerOverlayComponent,
  ShowAnswerAnimationComponent,
  WordGapComponent,
  ChallengeProgressComponent,
  ChallengeFinishedOverlayComponent,
  ChallengeSectionBottomComponent,
  ChallengeSectionTopComponent,
  ChallengeWrapperComponent,
  WordAltComponent,
  GenderDotComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, FontAwesomeModule, ButtonModule],
  exports: components,
})
export class ChallengeComponentsModule {}
