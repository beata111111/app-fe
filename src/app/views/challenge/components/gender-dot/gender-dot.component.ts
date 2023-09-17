import {Component, Input} from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {Word} from "@model";

@Component({
  selector: 'app-gender-dot',
  templateUrl: './gender-dot.component.html',
  styleUrls: ['./gender-dot.component.scss']
})
export class GenderDotComponent {
  faCircle = faCircle;
  @Input() word!: Word;
}
