import { Component, Input } from '@angular/core';
import { faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-achievement-ribbon',
  templateUrl: './achievement-ribbon.component.html',
  styleUrls: ['./achievement-ribbon.component.scss']
})
export class AchievementRibbonComponent {
  faAward = faAward;

  @Input() level!: number;
}
