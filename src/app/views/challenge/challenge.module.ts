import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import {ChallengeRoutingModule} from "./challenge-routing.module";
import {ButtonModule, NavContainerModule, TopNavModule} from "@components";
import {ChallengeAVariantModule} from "./challenge-a-variant/challenge-a-variant.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ChallengeBVariantModule} from "./challenge-b-variant/challenge-b-variant.module";

@NgModule({
  declarations: [
    ChallengeComponent,
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
  ]
})
export class ChallengeModule { }
