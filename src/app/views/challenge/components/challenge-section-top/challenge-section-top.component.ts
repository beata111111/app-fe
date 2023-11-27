import { Component, EventEmitter, Input, Output } from "@angular/core";
import { WordAnswer } from "@model";

@Component({
  selector: "app-challenge-section-top",
  templateUrl: "./challenge-section-top.component.html",
  styleUrls: ["./challenge-section-top.component.scss"],
})
export class ChallengeSectionTopComponent {
  @Input() answerWords!: WordAnswer[];
  @Output() action = new EventEmitter<any>();

  handleWordAction(word_id: string): void {
    this.action.emit(word_id);
  }
}
