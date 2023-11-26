import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChallengeAVariantComponent } from "./challenge-a-variant.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@components";
import { ChallengeAVariantMiddleSectionComponent } from "./middle-section/middle-section.component";
import { ChallengeComponentsModule } from "@challengeComponents";
import { ChallengeSectionBottomModule } from "../components/challenge-section-bottom/challenge-section-bottom.module";

@NgModule({
  declarations: [
    ChallengeAVariantComponent,
    ChallengeAVariantMiddleSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
    ChallengeComponentsModule,
    ChallengeSectionBottomModule,
  ],
  exports: [ChallengeAVariantComponent],
})
export class ChallengeAVariantModule {}
