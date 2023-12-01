import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StyleguideColorsRoutingModule } from "./styleguide-colors-routing.module";
import { StyleguideColorsComponent } from "./styleguide-colors.component";
import {StyleguideColorsSectionComponent} from "./styleguide-section/styleguide-colors-section.component";

// prettier-ignore
@NgModule({
  declarations: [StyleguideColorsComponent, StyleguideColorsSectionComponent],
  imports: [
    CommonModule,
    StyleguideColorsRoutingModule,
  ],
  providers: [],
  exports: [StyleguideColorsComponent],
})
export class StyleguideColorsModule {}
