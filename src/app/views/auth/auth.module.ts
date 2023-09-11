import {NgModule} from '@angular/core';
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {ContainerModule} from "../../components/container/container.module";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "../../components/button/button.module";


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ContainerModule,
    TranslateModule,
    ButtonModule,
  ],
  providers: [],
  exports: [],
})
export class AuthModule {
}
