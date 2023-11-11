import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChallengeAVariantComponent } from "./challenge-a-variant.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@components";
import { ChallengeAVariantMiddleSectionComponent } from "./middle-section/middle-section.component";
import { ChallengeAVariantBottomSectionComponent } from "./bottom-section/bottom-section.component";
import { ChallengeComponentsModule } from "@challengeComponents";

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
    ChallengeComponentsModule,
  ],
  exports: [ChallengeAVariantComponent],
})
export class ChallengeAVariantModule {}
