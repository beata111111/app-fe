import {Component, Input, OnInit} from '@angular/core';
import {getStatusColor} from "@helpers";

@Component({
  selector: 'app-challenge-finished-overlay',
  templateUrl: './challenge-finished-overlay.component.html',
  styleUrls: ['./challenge-finished-overlay.component.scss']
})
export class ChallengeFinishedOverlayComponent implements OnInit {
  @Input() result!: number;

  color = '#6fe594';

  ngOnInit() {
    const result = this.result;
    this.color = getStatusColor(true, result);
  }
}
