import { Component, Input } from "@angular/core";
import { VoiceService } from "@core";
import { Word } from "@model";

@Component({
  selector: "app-v-c-middle-section",
  templateUrl: "./middle-section.component.html",
})
export class ChallengeCVariantMiddleSectionComponent {
  showWord!: {
    wholeWord: string;
    wordFirstPart: string;
    wordSecondPart: string;
    gapWord: string;
    wordDe: string;
  };

  @Input() variant: "c" | "d" | "e" = "c";
  @Input() showAnswer = false;
  @Input() lastAnswerCorrect = false;
  @Input() gapNumber = 0;
  @Input() showHistory = false;

  @Input() set word(word: Word) {
    const words = word[`variant_${this.variant}_pl`].split(" ");
    const n = this.gapNumber % words.length;

    this.showWord = {
      wholeWord: word[`variant_${this.variant}_pl`],
      wordFirstPart: [...words].splice(0, n).join(" "),
      wordSecondPart: [...words].splice(n + 1).join(" "),
      gapWord: words[n],
      wordDe: word[`variant_${this.variant}_de`],
    };
  }

  constructor(private _voiceService: VoiceService) {}

  speak(text?: string) {
    if (text && !this.showHistory) {
      this._voiceService.speak(text);
    } else if (this.showHistory) {
      this._voiceService.speak(this.showWord.wholeWord);
    }
  }
}
