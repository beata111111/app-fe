import {NgModule} from '@angular/core';
import {MenuItemComponent} from "./menu-item.component";
import {ButtonModule} from "../button/button.module";

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    ButtonModule,
  ],
  providers: [],
  exports: [
    MenuItemComponent
  ],
})
export class MenuItemModule {
}


