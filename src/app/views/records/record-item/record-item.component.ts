import {Component, HostBinding, Input} from "@angular/core";
import {Record} from "@model";

@Component({
  selector: "app-record-item",
  templateUrl: "./record-item.component.html",
  styleUrls: ["./record-item.component.scss"],
})
export class RecordItemComponent {
  @Input() record!: Record;
  @Input() isActive = false;
  @Input() index = 0;

  @HostBinding('class.is-active') get getIsActive(): boolean {
    return this.isActive;
  }
}
