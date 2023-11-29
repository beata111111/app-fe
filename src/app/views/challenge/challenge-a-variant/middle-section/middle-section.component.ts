import { Component, Input } from "@angular/core";
import { VoiceService } from "@core";
import { Word } from "@model";

@Component({
  selector: "app-v-a-middle-section",
  templateUrl: "./middle-section.component.html",
})
export class ChallengeAVariantMiddleSectionComponent {
  constructor(private _voiceService: VoiceService) {}

  @Input() showHistory = false;
  @Input() word!: Word;
  @Input() showAnswer = false;
  @Input() lastAnswerCorrect = false;

  speak() {
    this._voiceService.speak(this.word.nounPL);
  }
}
