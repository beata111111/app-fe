import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {TranslateModule} from "@ngx-translate/core";
import {AuthRoutingModule} from "../auth-routing.module";
import {ButtonModule, ContainerModule} from "@components";


@NgModule({
  declarations: [
    RegisterComponent
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
export class RegisterModule { }
