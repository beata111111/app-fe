import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import {UserPointsUpdate} from "@model";

@Component({
  selector: 'app-diamond-counter',
  templateUrl: './diamond-counter.component.html',
  styleUrls: ['./diamond-counter.component.scss']
})
export class DiamondCounterComponent implements OnInit {
  faGem = faGem;

  previousPoints: number | null = null;
  points: number | null = null;

  isAnimating = false;

  @Input() set data (data: UserPointsUpdate | null) {
    if (data) {
      this.previousPoints = data.previousPoints;
      this.points = data.points;
    }
  }

  ngOnInit() {
    if (this.previousPoints !== null && this.points && this.previousPoints !== this.points) {
      this.isAnimating = true;
    }
  }

  @HostBinding('class.animating') get animating() {
    return this.isAnimating;
  }
}
