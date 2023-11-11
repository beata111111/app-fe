import { Component, Input } from "@angular/core";
import { Record } from "@model";
import { faGem } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-record-board",
  templateUrl: "./record-board.component.html",
  styleUrls: ["./record-board.component.scss"],
})
export class RecordBoardComponent {
  @Input() records: Record[] = [];
  protected readonly faGem = faGem;
}
