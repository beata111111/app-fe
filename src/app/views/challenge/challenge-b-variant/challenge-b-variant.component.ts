import { Component, OnDestroy, OnInit, Self } from "@angular/core";
import { VoiceService, VoiceWorkerService } from "@core";
import { ChallengeService } from "../challenge.service";
import { AbstractChallengeHistoryComponent } from "../abstract/challenge-history.directive";
import { Word, WordAnswer } from "@model";

@Component({
  selector: "app-challenge-b-variant",
  templateUrl: "./challenge-b-variant.component.html",
  styleUrls: ["./challenge-b-variant.component.scss"],
  providers: [ChallengeService],
})
export class ChallengeBVariantComponent
  extends AbstractChallengeHistoryComponent
  implements OnInit, OnDestroy
{
  constructor(
    protected override _voiceService: VoiceService,
    @Self() protected override _challengeService: ChallengeService,
    private _voiceWorkerService: VoiceWorkerService,
  ) {
    super(_voiceService, _challengeService);
  }

  ngOnInit() {
    this._challengeService.setChallengeData(
      this.challengeData,
      3000,
      "_adjSpeakPL",
    );
    this._voiceWorkerService.prefetchWordsVoice(
      this.challengeData,
      "_adjSpeakPL",
    );
  }

  generateAnswerWords(words: Word[]): WordAnswer[] {
    return words.map((word) => {
      return {
        word_id: word.word_id,
        answer: word.adj,
      };
    });
  }
}
