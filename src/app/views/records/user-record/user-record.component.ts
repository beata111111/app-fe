import {Component, Input} from '@angular/core';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import {UserRecord} from "@model";

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.scss']
})
export class UserRecordComponent {
  faGem = faGem;
  @Input() userRecord!: UserRecord;
}
