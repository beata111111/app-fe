import {Directive} from '@angular/core';
import {WordHistory} from "@model";

@Directive()
export abstract class AbstractChallengeHistoryComponent {
  showHistory = false;
  history: WordHistory[] = [];
  historyCurrentStepIndex: number | null = null;
  historyCurrentStep!: WordHistory;

  activateHistory(): void {
    if (!this.history.length) return;
    this.showHistory = true;
    const currentIndex = this.history.length - 1;
    this.historyCurrentStepIndex = currentIndex;
    this.historyCurrentStep = this.history[currentIndex];
  }

  deactivateHistory(): void {
    this.showHistory = false;
    this.historyCurrentStepIndex = null;
  }

  backInHistory(): void {
    if (!this.showHistory) {
      this.activateHistory();
    } else {
      const currentIndex = (this.historyCurrentStepIndex as number) - 1;
      this.historyCurrentStepIndex = currentIndex;
      this.historyCurrentStep = this.history[currentIndex];
    }
  }

  forwardInHistory(): void {
    const currentIndex = (this.historyCurrentStepIndex as number) + 1;
    this.historyCurrentStepIndex = currentIndex;
    this.historyCurrentStep = this.history[currentIndex];
    if (currentIndex > this.history.length - 1) {
      this.deactivateHistory();
    }
  }
}