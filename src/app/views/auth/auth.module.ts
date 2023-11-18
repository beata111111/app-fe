import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { ContainerModule, ButtonModule } from "@components";
import { TranslateModule } from "@ngx-translate/core";
import {LoginModule} from "./login/login.module";
import {RegisterModule} from "./register/register.module";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ContainerModule,
    TranslateModule,
    ButtonModule,
    LoginModule,
    RegisterModule,
  ],
  providers: [],
  exports: [],
})
export class AuthModule {}
