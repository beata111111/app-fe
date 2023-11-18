import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {TranslateModule} from "@ngx-translate/core";
import {AuthRoutingModule} from "../auth-routing.module";
import {ButtonModule, ContainerModule} from "@components";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CommonModule,
    AuthRoutingModule,
    ContainerModule,
    TranslateModule,
    ButtonModule,
  ]
})
export class LoginModule { }
