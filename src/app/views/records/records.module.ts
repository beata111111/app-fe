import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from "./records-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule, NavContainerModule, PageSpinnerModule, TopNavModule } from "@components";
import { RecordBoardComponent } from './record-board/record-board.component';

@NgModule({
  declarations: [
    RecordsComponent,
    RecordBoardComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    NavContainerModule,
    TopNavModule,
    PageSpinnerModule,
  ]
})
export class RecordsModule { }
