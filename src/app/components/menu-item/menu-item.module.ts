import { NgModule } from "@angular/core";
import { MenuItemComponent } from "./menu-item.component";
import { ButtonModule } from "../button/button.module";
import { TranslateModule } from "@ngx-translate/core";

// prettier-ignore
@NgModule({
  declarations: [MenuItemComponent],
  imports: [ButtonModule, TranslateModule],
  providers: [],
  exports: [MenuItemComponent],
})
export class MenuItemModule {}
