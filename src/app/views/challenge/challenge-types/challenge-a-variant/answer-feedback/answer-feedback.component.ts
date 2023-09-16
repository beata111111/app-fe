import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-answer-feedback',
  templateUrl: './answer-feedback.component.html',
  styleUrls: ['./answer-feedback.component.scss']
})
export class AnswerFeedbackComponent {
  @Output() nextWord = new EventEmitter<void>();

  handleCloseOverlay() {
    this.nextWord.emit();
  }
}
