import {Component, HostBinding, Input} from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-answer-animation',
  templateUrl: './show-answer-animation.component.html',
  styleUrls: ['./show-answer-animation.component.scss']
})
export class ShowAnswerAnimationComponent {
  faCheck = faCheck;

  @Input() showAnswer = false;
  @Input() answerCorrect = false;
  @Input() showHistory = false;

  @HostBinding('class.show') get isShow() {
    return this.showAnswer && this.answerCorrect && !this.showHistory;
  }

  @HostBinding('class.history') get isShowHistory() {
    return this.showHistory && this.answerCorrect;
  }
}
