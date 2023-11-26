import { Component, EventEmitter, Input, Output } from "@angular/core";
import { WordAnswer } from "@model";

@Component({
  selector: "app-challenge-section-bottom",
  templateUrl: "./challenge-section-bottom.component.html",
  styleUrls: ["./challenge-section-bottom.component.scss"],
})
export class ChallengeSectionBottomComponent {
  @Input() answerWords!: WordAnswer[];
  @Output() action = new EventEmitter<any>();

  handleWordAction(word_id: string): void {
    this.action.emit(word_id);
  }
}
