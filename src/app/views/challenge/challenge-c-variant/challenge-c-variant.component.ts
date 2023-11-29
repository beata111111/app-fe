import { Component, Input, OnDestroy, OnInit, Self } from "@angular/core";
import { VoiceService, VoiceWorkerService } from "@core";
import { ChallengeService } from "../challenge.service";
import { AbstractChallengeHistoryComponent } from "../abstract/challenge-history.directive";
import { Word, WordAnswer } from "@model";

@Component({
  selector: "app-challenge-c-variant",
  templateUrl: "./challenge-c-variant.component.html",
  providers: [ChallengeService],
})
export class ChallengeCVariantComponent
  extends AbstractChallengeHistoryComponent
  implements OnInit, OnDestroy
{
  @Input() variant: "c" | "d" | "e" = "c";

  constructor(
    protected override _voiceService: VoiceService,
    @Self() protected override _challengeService: ChallengeService,
    private _voiceWorkerService: VoiceWorkerService,
  ) {
    super(_voiceService, _challengeService);
  }

  ngOnInit() {
    const speakableProperty = `variant_${this.variant}_pl` as keyof Word;
    this._challengeService.setChallengeData(this.challengeData, 3000, speakableProperty);
    this._voiceWorkerService.prefetchWordsVoice(this.challengeData, speakableProperty);
  }

  generateAnswerWords(words: Word[], gapNumber: number): WordAnswer[] {
    return words.map((word) => {
      return {
        word_id: word.word_id,
        answer: this._generateAnswer(word, gapNumber),
      };
    });
  }

  private _generateAnswer(word: Word, gapNumber: number): string {
    const words = word[`variant_${this.variant}_pl`].split(" ");
    const n = gapNumber % words.length;
    return words[n].toLowerCase().replace(".", "");
  }
}
