import { Component, Input } from '@angular/core';
import { Word } from 'src/app/model';

@Component({
  selector: 'app-word-alt',
  templateUrl: './word-alt.component.html',
  styleUrls: ['./word-alt.component.scss']
})
export class WordAltComponent {
  @Input() word!: Word;
}
