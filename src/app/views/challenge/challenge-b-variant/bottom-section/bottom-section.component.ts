import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Word } from "@model";

@Component({
  selector: "app-v-b-bottom-section",
  templateUrl: "./bottom-section.component.html",
  styleUrls: ["./bottom-section.component.scss"],
})
export class ChallengeBVariantBottomSectionComponent {
  @Input() roundWords!: Word[];
  @Output() action = new EventEmitter<any>();

  handleWordAction(word_id: string): void {
    this.action.emit(word_id);
  }
}
