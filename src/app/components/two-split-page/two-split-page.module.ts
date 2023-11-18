import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TwoSplitPageComponent } from "./two-split-page.component";
import { PageSpinnerModule } from "@components";

@NgModule({
  declarations: [TwoSplitPageComponent],
  imports: [CommonModule, PageSpinnerModule],
  exports: [TwoSplitPageComponent],
})
export class TwoSplitPageModule {}
