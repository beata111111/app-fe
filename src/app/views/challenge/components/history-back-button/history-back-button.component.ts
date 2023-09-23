import { Component } from '@angular/core';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-history-back-button',
  templateUrl: './history-back-button.component.html',
  styleUrls: ['./history-back-button.component.scss']
})
export class HistoryBackButtonComponent {
  faCaretLeft = faCaretLeft;
}
