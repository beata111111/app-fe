import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChallengeComponent } from "./challenge.component";
import { ChallengeRoutingModule } from "./challenge-routing.module";
import { ButtonModule, PageContainerModule, PageSpinnerModule, TopNavModule } from "@components";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ChallengeAVariantComponent } from "./challenge-a-variant/challenge-a-variant.component";
import { ChallengeBVariantComponent } from "./challenge-b-variant/challenge-b-variant.component";
import { ChallengeCVariantComponent } from "./challenge-c-variant/challenge-c-variant.component";
import { ChallengeAVariantMiddleSectionComponent } from "./challenge-a-variant/middle-section/middle-section.component";
import { ChallengeBVariantMiddleSectionComponent } from "./challenge-b-variant/middle-section/middle-section.component";
import { ChallengeCVariantMiddleSectionComponent } from "./challenge-c-variant/middle-section/middle-section.component";
import { ChallengeComponentsModule } from "@challengeComponents";

// prettier-ignore
@NgModule({
  declarations: [
    ChallengeComponent,
    ChallengeAVariantComponent,
    ChallengeBVariantComponent,
    ChallengeCVariantComponent,
    ChallengeAVariantMiddleSectionComponent,
    ChallengeBVariantMiddleSectionComponent,
    ChallengeCVariantMiddleSectionComponent,
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    PageContainerModule,
    TopNavModule,
    ButtonModule,
    FontAwesomeModule,
    PageSpinnerModule,
    ChallengeComponentsModule,
  ],
})
export class ChallengeModule {}
