import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePopupComponent } from './page-popup.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ButtonModule} from "@components";



@NgModule({
  declarations: [
    PagePopupComponent
  ],
  exports: [
    PagePopupComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonModule,
  ]
})
export class PagePopupModule { }
