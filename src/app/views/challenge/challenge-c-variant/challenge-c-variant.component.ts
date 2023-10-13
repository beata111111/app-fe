import {Component, Input, OnDestroy, OnInit, Self} from '@angular/core';
import {VoiceService} from "@core";
import {ChallengeService} from "../challenge.service";
import {AbstractChallengeHistoryComponent} from "../abstract/challenge-history.directive";
import {Word} from "@model";

@Component({
  selector: 'app-challenge-c-variant',
  templateUrl: './challenge-c-variant.component.html',
  styleUrls: ['./challenge-c-variant.component.scss'],
  providers: [ChallengeService]
})

export class ChallengeCVariantComponent extends AbstractChallengeHistoryComponent implements OnInit, OnDestroy {
  @Input() variant: 'c' | 'd' | 'e' = 'c';

  constructor(protected override _voiceService: VoiceService,
              @Self() protected override _challengeService: ChallengeService
  ) {
    super(_voiceService, _challengeService);
  }

  ngOnInit() {
    this._challengeService.setChallengeData(this.challengeData, 3000, `variant_${this.variant}_pl` as keyof Word);
  }
}
