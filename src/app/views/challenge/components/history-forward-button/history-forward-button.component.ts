import { Component } from '@angular/core';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-history-forward-button',
  templateUrl: './history-forward-button.component.html',
  styleUrls: ['./history-forward-button.component.scss']
})
export class HistoryForwardButtonComponent {
  faCaretRight = faCaretRight;
}
