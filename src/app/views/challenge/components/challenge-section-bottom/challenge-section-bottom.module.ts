import { NgModule } from "@angular/core";
import { ChallengeSectionBottomComponent } from "./challenge-section-bottom.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "@components";

@NgModule({
  declarations: [ChallengeSectionBottomComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ChallengeSectionBottomComponent],
})
export class ChallengeSectionBottomModule {}
