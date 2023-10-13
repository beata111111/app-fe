import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Word} from "@model";

@Component({
  selector: 'app-v-c-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss']
})
export class ChallengeCVariantBottomSectionComponent {
  roundShowWords!: { answer: string, word_id: string }[];

  @Input() set roundWords (words: Word[]) {
    console.log(this.gapNumber);
    this.roundShowWords = words.map(word => {
      return {
        word_id: word.word_id,
        answer: this._generateAnswer(word, this.gapNumber)
      }
    })
  };

  @Input() variant: 'c' | 'd' | 'e' = 'c';
  @Input() gapNumber!: number;
  @Output() action = new EventEmitter<any>();

  handleWordAction(word_id: string): void {
    this.action.emit(word_id);
  }

  private _generateAnswer(word: Word, gapNumber: number): string {
    const words = word[`variant_${this.variant}_pl`].split(" ");
    const n = gapNumber % words.length;
    return words[n];
  }
}
