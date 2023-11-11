import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-welcome-first-step',
  templateUrl: './welcome-first-step.component.html',
  styleUrls: ['./welcome-first-step.component.scss']
})
export class WelcomeFirstStepComponent implements OnInit {
  @Output() config = new EventEmitter<unknown>();

  ngOnInit() {
    this.config.emit({
      nextButtonText: 'hallo',
      backButtonText: 'world'
    });
  }

}
