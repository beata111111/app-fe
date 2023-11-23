import {Component, Input} from '@angular/core';
import {UserRecord} from "@model";

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.scss']
})
export class UserRecordComponent {
  @Input() userRecord!: UserRecord;
}
