import {Directive, EventEmitter, Input, OnDestroy, OnInit, Output, Self} from '@angular/core';
import {ChallengeState, Word} from "@model";
import {Observable, Subscription} from "rxjs";
import {ChallengeService} from "../challenge.service";
import {VoiceService} from "@core";

@Directive()
export abstract class AbstractChallengeComponent implements OnDestroy {
  @Input() challengeData!: Word[];
  @Output() submitResult = new EventEmitter();

  showFinishOverlay = false;

  protected _subscriptions = new Subscription();

  challengeState$: Observable<ChallengeState | null>;

  constructor(
    protected _voiceService: VoiceService,
    @Self() protected _challengeService: ChallengeService
  ) {
    this.challengeState$ = this._challengeService.state$;

    this.challengeState$.subscribe(state => {
      if (state?.challengeFinished) {
        this.showFinishOverlay = true;
        this.submitResult.emit(state.correctAnswersRatio);
      }
    })
  }

  speak(word: string) {
    this._voiceService.speak(word);
  }

  nextWord() {
    this._challengeService.nextWord();
  }

  handleAnswer(word_id: string) {
    this._challengeService.handleAnswer(word_id);
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
