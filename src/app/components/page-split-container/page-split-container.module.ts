import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageSplitContainerComponent } from "./page-split-container.component";
import { PageSpinnerModule } from "@components";

// prettier-ignore
@NgModule({
  declarations: [PageSplitContainerComponent],
  imports: [CommonModule, PageSpinnerModule],
  exports: [PageSplitContainerComponent],
})
export class PageSplitContainerModule {}
