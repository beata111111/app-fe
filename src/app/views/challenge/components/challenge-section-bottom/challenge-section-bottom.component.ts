import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Word} from "@model";

@Component({
  selector: 'app-challenge-section-bottom',
  templateUrl: './challenge-section-bottom.component.html',
  styleUrls: ['./challenge-section-bottom.component.scss']
})
export class ChallengeSectionBottomComponent {
  @Input() roundWords!: Word[];
  @Output() action = new EventEmitter<any>();

  handleWordAction(word_id: string): void {
    this.action.emit(word_id);
  }

  @Input() answerKey: keyof Word = 'nounDE';
  @Input() answerWords!: Word[];
}
