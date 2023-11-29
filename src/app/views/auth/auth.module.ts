import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";

// prettier-ignore
@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, LoginModule, RegisterModule, AuthRoutingModule],
  providers: [],
  exports: [],
})
export class AuthModule {}
