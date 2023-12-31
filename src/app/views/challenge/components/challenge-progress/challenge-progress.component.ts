import { Component, Input } from "@angular/core";

@Component({
  selector: "app-challenge-progress",
  templateUrl: "./challenge-progress.component.html",
  styleUrls: ["./challenge-progress.component.scss"],
})
export class ChallengeProgressComponent {
  stepCount = 10;

  @Input() currentStep: number = 0;
}
