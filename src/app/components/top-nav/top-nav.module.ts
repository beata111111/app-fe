import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopNavComponent} from "./top-nav.component";

@NgModule({
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopNavModule { }
