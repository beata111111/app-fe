import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecordsComponent } from "./records.component";
import { RecordsRoutingModule } from "./records-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule, PageContainerModule, PageSpinnerModule, TopNavModule } from "@components";
import { RecordItemComponent } from "./record-item/record-item.component";
import { DiamondIconModule } from "../../components/diamond-icon/diamond-icon.module";
import { UserRecordComponent } from "./user-record/user-record.component";
import { TranslateModule } from "@ngx-translate/core";

// prettier-ignore
@NgModule({
  declarations: [RecordsComponent, RecordItemComponent, UserRecordComponent],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    PageContainerModule,
    TopNavModule,
    PageSpinnerModule,
    DiamondIconModule,
    TranslateModule,
  ],
  exports: [RecordItemComponent]
})
export class RecordsModule {}
