import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {faGem} from '@fortawesome/free-regular-svg-icons';
import {UserPointsUpdate} from "@model";
import {DiamondCounterService} from "./diamond-counter.service";

@Component({
  selector: 'app-diamond-counter',
  templateUrl: './diamond-counter.component.html',
  styleUrls: ['./diamond-counter.component.scss'],
})
export class DiamondCounterComponent implements OnInit {
  faGem = faGem;

  previousPoints: number | null = null;
  points: number | null = null;
  isAnimating = false;

  constructor(private _diamondCounterService: DiamondCounterService) {
  }

  @Input() set data (data: UserPointsUpdate | null) {
    if (data) {
      this.previousPoints = data.previousPoints;
      this.points = data.points;
      this._diamondCounterService.setLastValue(data.points);
    }
  }

  ngOnInit() {
    this.isAnimating = this._diamondCounterService.showAnimation();
  }

  @HostBinding('class.animating') get animating() {
    return this.isAnimating;
  }
}
