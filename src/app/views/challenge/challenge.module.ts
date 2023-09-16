import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import {ChallengeRoutingModule} from "./challenge-routing.module";
import {ButtonModule, NavContainerModule, TopNavModule} from "@components";
import {ChallengeAVariantModule} from "./challenge-types/challenge-a-variant/challenge-a-variant.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    NavContainerModule,
    ChallengeAVariantModule,
    TopNavModule,
    ButtonModule,
    FontAwesomeModule,
  ]
})
export class ChallengeModule { }
