import { NgModule } from "@angular/core";
import { StyleguideComponent } from "./styleguide.component";
import { CommonModule } from "@angular/common";
import { StyleguideRoutingModule } from "./styleguide-routing.module";
import { MainMenuModule } from "../main/main-menu/main-menu.module";
import { ButtonModule } from "@components";
import { ChallengeComponentsModule } from "@challengeComponents";
import { StyleguideSectionComponent } from "./styleguide-section/styleguide-section.component";
import {RecordsModule} from "../records/records.module";

// prettier-ignore
@NgModule({
  declarations: [StyleguideComponent, StyleguideSectionComponent],
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    MainMenuModule,
    ButtonModule,
    ChallengeComponentsModule,
    RecordsModule,
  ],
  providers: [],
  exports: [StyleguideComponent],
})
export class StyleguideModule {}
