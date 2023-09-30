import {Component, Input} from '@angular/core';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import {UserPointsUpdate} from "@model";

@Component({
  selector: 'app-diamond-counter',
  templateUrl: './diamond-counter.component.html',
  styleUrls: ['./diamond-counter.component.scss']
})
export class DiamondCounterComponent {
  previousPoints = 0;
  points = 0;

  @Input() set data (data: UserPointsUpdate | null) {
    if (data) {
      this.previousPoints = data.previousPoints;
      this.points = data.points;
    }
  }
  faGem = faGem;
}
