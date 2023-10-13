import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import {ChallengeRoutingModule} from "./challenge-routing.module";
import {ButtonModule, NavContainerModule, TopNavModule} from "@components";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ChallengeAVariantModule} from "./challenge-a-variant/challenge-a-variant.module";
import {ChallengeBVariantModule} from "./challenge-b-variant/challenge-b-variant.module";
import {ChallengeCVariantModule} from "./challenge-c-variant/challenge-c-variant.module";

@NgModule({
  declarations: [
    ChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    NavContainerModule,
    TopNavModule,
    ButtonModule,
    FontAwesomeModule,
    ChallengeAVariantModule,
    ChallengeBVariantModule,
    ChallengeCVariantModule,
  ]
})
export class ChallengeModule { }
