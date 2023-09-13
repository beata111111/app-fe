import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import {ChallengeRoutingModule} from "./challenge-routing.module";

@NgModule({
  declarations: [
    ChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
  ]
})
export class ChallengeModule { }
