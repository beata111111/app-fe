import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecordsComponent } from "./records.component";
import { RecordsRoutingModule } from "./records-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  ButtonModule,
  NavContainerModule,
  PageSpinnerModule,
  TopNavModule,
} from "@components";
import { RecordBoardComponent } from "./record-board/record-board.component";
import { DiamondIconModule } from "../../components/diamond-icon/diamond-icon.module";
import { UserRecordComponent } from './user-record/user-record.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RecordsComponent,
    RecordBoardComponent,
    UserRecordComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    NavContainerModule,
    TopNavModule,
    PageSpinnerModule,
    DiamondIconModule,
    TranslateModule,
  ],
})
export class RecordsModule {}
