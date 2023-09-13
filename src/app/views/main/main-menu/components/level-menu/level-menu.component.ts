import {Component, Input} from '@angular/core';
import {LevelStatus} from "@model";

@Component({
  selector: 'app-level-menu',
  templateUrl: './level-menu.component.html',
  styleUrls: ['./level-menu.component.scss']
})
export class LevelMenuComponent {
 @Input() level!: LevelStatus;
 @Input() category!: string;
}
