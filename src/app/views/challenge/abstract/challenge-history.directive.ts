import {Directive, Self} from '@angular/core';
import {WordHistory} from "@model";
import {ChallengeService} from "../challenge.service";
import {AbstractChallengeComponent} from "./challenge.directive";
import {VoiceService} from "@core";

@Directive()
export abstract class AbstractChallengeHistoryComponent extends AbstractChallengeComponent {
  showHistory = false;
  history: WordHistory[] = [];
  historyCurrentWordIndex: number | null = null;
  historyCurrentWord!: WordHistory;

  constructor(
    protected override _voiceService: VoiceService,
    @Self() protected override _challengeService: ChallengeService
  ) {
    super(_voiceService, _challengeService);
    this._subscriptions.add(
      this.challengeState$.subscribe(state => {
        if (state) {
          this.history = state.history;
        }
      })
    )
  }

  activateHistory(): void {
    if (!this.history.length) return;
    this.showHistory = true;
    const currentIndex = this.history.length - 1;
    this.historyCurrentWordIndex = currentIndex;
    this.historyCurrentWord = this.history[currentIndex];
  }

  deactivateHistory(): void {
    this.showHistory = false;
    this.historyCurrentWordIndex = null;
  }

  backInHistory(): void {
    if (!this.showHistory) {
      this.activateHistory();
    } else {
      const currentIndex = (this.historyCurrentWordIndex as number) - 1;
      this.historyCurrentWordIndex = currentIndex;
      this.historyCurrentWord = this.history[currentIndex];
    }
  }

  forwardInHistory(): void {
    const currentIndex = (this.historyCurrentWordIndex as number) + 1;
    this.historyCurrentWordIndex = currentIndex;
    this.historyCurrentWord = this.history[currentIndex];
  }
}