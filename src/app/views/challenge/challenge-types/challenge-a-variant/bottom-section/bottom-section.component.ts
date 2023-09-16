import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Word} from "@model";

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss']
})
export class BottomSectionComponent {
  @Input() currentWord!: Word;
  @Input() roundWords!: Word[];

  @Output() action = new EventEmitter<any>();

  constructor(
  ) {
  }

  handleWordAction(word_id: string): void {
    this.action.emit(word_id);
  }
}
