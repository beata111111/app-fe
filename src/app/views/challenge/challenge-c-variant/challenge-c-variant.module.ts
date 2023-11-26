import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@components";
import { ChallengeCVariantMiddleSectionComponent } from "./middle-section/middle-section.component";
import { ChallengeCVariantComponent } from "./challenge-c-variant.component";
import { ChallengeComponentsModule } from "@challengeComponents";
import { ChallengeSectionBottomModule } from "../components/challenge-section-bottom/challenge-section-bottom.module";

@NgModule({
  declarations: [
    ChallengeCVariantComponent,
    ChallengeCVariantMiddleSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    ChallengeComponentsModule,
    ChallengeComponentsModule,
    ChallengeSectionBottomModule,
  ],
  exports: [ChallengeCVariantComponent],
})
export class ChallengeCVariantModule {}
