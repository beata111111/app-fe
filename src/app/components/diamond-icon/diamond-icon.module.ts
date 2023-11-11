import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DiamondIconComponent } from "./diamond-icon.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ShineAnimationModule } from "@components";

@NgModule({
  declarations: [DiamondIconComponent],
  imports: [CommonModule, FontAwesomeModule, ShineAnimationModule],
  exports: [DiamondIconComponent],
})
export class DiamondIconModule {}
