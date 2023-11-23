import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionComponent } from "./accordion.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, TranslateModule],
  exports: [AccordionComponent],
})
export class AccordionModule {}
