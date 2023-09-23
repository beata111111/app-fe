import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {VoiceService} from "@core";
import {ChallengeService} from "../challenge.service";
import {AbstractChallengeHistoryComponent} from "../abstract/challenge-history.directive";

@Component({
  selector: 'app-challenge-a-variant',
  templateUrl: './challenge-a-variant.component.html',
  styleUrls: ['./challenge-a-variant.component.scss'],
  providers: [ChallengeService]
})

export class ChallengeAVariantComponent extends AbstractChallengeHistoryComponent implements OnInit, OnDestroy {

  constructor(protected override _voiceService: VoiceService,
              @Self() protected override _challengeService: ChallengeService
  ) {
    super(_voiceService, _challengeService);

    this._subscriptions.add(
      this.challengeState$.subscribe(state => {
        if (state && !state.showAnswer) {
          this.speak(state.currentWord.nounPL)
        }
      })
    )
  }

  ngOnInit() {
    this._challengeService.setChallengeData(this.challengeData, 1000, '');
  }
}
