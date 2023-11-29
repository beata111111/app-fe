import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageContainerComponent } from "./page-container.component";

// prettier-ignore
@NgModule({
  declarations: [PageContainerComponent],
  imports: [CommonModule],
  exports: [PageContainerComponent],
})
export class PageContainerModule {}
