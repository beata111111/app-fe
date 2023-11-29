import { Component, TemplateRef, EventEmitter, Input, Output } from "@angular/core";
import { ChallengeState, WordHistory } from "@model";

@Component({
  selector: "app-challenge-wrapper",
  templateUrl: "./challenge-wrapper.component.html",
  styleUrls: ["./challenge-wrapper.component.scss"],
})
export class ChallengeWrapperComponent {
  @Input() challengeState!: ChallengeState;
  @Input() showHistory = false;
  @Input() history!: WordHistory[];
  @Input() historyCurrentWordIndex!: number;
  @Input() topSectionTemplate!: TemplateRef<unknown>;
  @Input() bottomSectionTemplate!: TemplateRef<unknown>;

  @Output() nextWord = new EventEmitter<void>();
  @Output() backInHistory = new EventEmitter<void>();
  @Output() forwardInHistory = new EventEmitter<void>();

  handleNextWord(): void {
    this.nextWord.emit();
  }

  handleBackInHistory(): void {
    this.backInHistory.emit();
  }

  handleForwardInHistory(): void {
    this.forwardInHistory.emit();
  }
}
