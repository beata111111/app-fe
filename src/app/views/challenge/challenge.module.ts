import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import {ChallengeRoutingModule} from "./challenge-routing.module";
import {NavContainerModule} from "@components";

@NgModule({
  declarations: [
    ChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    NavContainerModule,
  ]
})
export class ChallengeModule { }
