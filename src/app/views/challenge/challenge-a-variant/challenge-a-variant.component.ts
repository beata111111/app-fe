import { Component, OnDestroy, OnInit, Self } from "@angular/core";
import { VoiceService, VoiceWorkerService } from "@core";
import { ChallengeService } from "../challenge.service";
import { AbstractChallengeHistoryComponent } from "../abstract/challenge-history.directive";
import { Word, WordAnswer } from "@model";

@Component({
  selector: "app-challenge-a-variant",
  templateUrl: "./challenge-a-variant.component.html",
  providers: [ChallengeService],
})
export class ChallengeAVariantComponent
  extends AbstractChallengeHistoryComponent
  implements OnInit, OnDestroy
{
  constructor(
    protected override _voiceService: VoiceService,
    @Self() protected override _challengeService: ChallengeService,
    private _voiceWorkerService: VoiceWorkerService,
  ) {
    super(_voiceService, _challengeService);

    this._subscriptions.add(
      this.challengeState$.subscribe((state) => {
        if (state && !state.showAnswer) {
          this.speak(state.currentWord.nounPL);
        }
      }),
    );
  }

  ngOnInit() {
    this._challengeService.setChallengeData(this.challengeData, 1000);
    this._voiceWorkerService.prefetchWordsVoice(this.challengeData, "nounPL");
  }

  generateAnswerWords(words: Word[]): WordAnswer[] {
    return words.map((word) => {
      return {
        word_id: word.word_id,
        answer: word.nounDE,
      };
    });
  }
}
