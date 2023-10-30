import {Component, Input, OnInit} from '@angular/core';
import {getStatusColor} from "@helpers";

@Component({
  selector: 'app-challenge-finished-overlay',
  templateUrl: './challenge-finished-overlay.component.html',
  styleUrls: ['./challenge-finished-overlay.component.scss']
})
export class ChallengeFinishedOverlayComponent implements OnInit {
  @Input() result!: number;

  color = '';

  ngOnInit() {
    this.color = getStatusColor(this.result);
  }
}
