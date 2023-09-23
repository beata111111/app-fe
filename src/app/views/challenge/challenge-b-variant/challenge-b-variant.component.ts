import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, Self} from '@angular/core';
import {VoiceService} from "@core";
import {ChallengeState, Word} from "@model";
import {ChallengeService} from "../challenge.service";
import {Observable, Subscription} from "rxjs";
import {AbstractChallengeComponent} from "../abstract/challenge-component.directive";

@Component({
  selector: 'app-challenge-b-variant',
  templateUrl: './challenge-b-variant.component.html',
  styleUrls: ['./challenge-b-variant.component.scss'],
  providers: [ChallengeService]
})

export class ChallengeBVariantComponent extends AbstractChallengeComponent implements OnInit, OnDestroy {
  @Input() challengeData!: Word[];
  @Output() submitResult = new EventEmitter();

  private _subscriptions = new Subscription();

  challengeState$: Observable<ChallengeState | null>;

  serviceData: any = {}

  constructor(private _voiceService: VoiceService,
              @Self() private _challengeService: ChallengeService) {
    super();
    this.challengeState$ = this._challengeService.state$;

    this._subscriptions.add(
      this.challengeState$.subscribe(state => {
        if (state) {
          this.history = state.history;
          if (state.challengeFinished) {
            this.submitResult.emit(state.correctAnswersRatio)
          }
        }
      })
    )
  }


  speak(word: string) {
    this._voiceService.speak(word);
  }

  handleAnswer(word_id: string) {
    this._challengeService.handleAnswer(word_id);
  }

  ngOnInit() {
    this._challengeService.setChallengeData(this.challengeData, 3000, '_adjSpeakPL');
  }

  nextWord() {
    this._challengeService.nextWord();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}