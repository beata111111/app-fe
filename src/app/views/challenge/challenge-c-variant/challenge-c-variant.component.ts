import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {VoiceService} from "@core";
import {ChallengeService} from "../challenge.service";
import {AbstractChallengeHistoryComponent} from "../abstract/challenge-history.directive";

@Component({
  selector: 'app-challenge-c-variant',
  templateUrl: './challenge-c-variant.component.html',
  styleUrls: ['./challenge-c-variant.component.scss'],
  providers: [ChallengeService]
})

export class ChallengeCVariantComponent extends AbstractChallengeHistoryComponent implements OnInit, OnDestroy {

  constructor(protected override _voiceService: VoiceService,
              @Self() protected override _challengeService: ChallengeService
  ) {
    super(_voiceService, _challengeService);
  }

  ngOnInit() {
    this._challengeService.setChallengeData(this.challengeData, 3000, '_adjSpeakPL');
  }
}
