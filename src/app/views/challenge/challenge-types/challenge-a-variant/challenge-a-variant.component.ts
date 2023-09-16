import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, Self} from '@angular/core';
import {VoiceService} from "@core";
import {faCheck, faCircle} from '@fortawesome/free-solid-svg-icons';
import {Word} from "@model";
import {ChallengeService, ChallengeState} from "../../challenge.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-challenge-a-variant',
  templateUrl: './challenge-a-variant.component.html',
  styleUrls: ['./challenge-a-variant.component.scss'],
  providers: [ChallengeService]
})

export class ChallengeAVariantComponent implements OnInit, OnDestroy {
  faCheck = faCheck;
  faCircle = faCircle;
  showAnswer = false;

  @Input() challengeData!: Word[];
  @Output() submitResult = new EventEmitter();

  private _subscriptions = new Subscription();

  challengeState$: Observable<ChallengeState | null>;

  serviceData: any = {}

  constructor(private _voiceService: VoiceService,
              @Self() private _challengeService: ChallengeService) {
    this.challengeState$ = this._challengeService.state$;


    this._subscriptions.add(
      this.challengeState$.subscribe(state => {
          if (state?.challengeFinished) {
            console.log('finish', state.correctAnswersRatio);
            this.submitResult.emit(state.correctAnswersRatio)
          }
        }
      )
    )
  }


  speak(word: string) {
    this._voiceService.speak(word);
  }

  handleAnswer(word_id: string) {
    this._challengeService.handleAnswer(word_id);
  }

  ngOnInit() {
    this._challengeService.setChallengeData(this.challengeData);
  }

  nextWord() {
    this._challengeService.nextWord();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
