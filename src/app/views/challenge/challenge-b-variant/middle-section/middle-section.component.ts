import { Component, Input } from "@angular/core";
import { VoiceService } from "@core";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Word } from "@model";

@Component({
  selector: "app-v-b-middle-section",
  templateUrl: "./middle-section.component.html",
  styleUrls: ["./middle-section.component.scss"],
})
export class ChallengeBVariantMiddleSectionComponent {
  constructor(private _voiceService: VoiceService) {}

  @Input() showHistory = false;

  faCheck = faCheck;
  faCircle = faCircle;

  @Input() word!: Word;
  @Input() showAnswer = false;
  @Input() lastAnswerCorrect = false;

  speak(text?: string) {
    if (text && !this.showHistory) {
      this._voiceService.speak(text);
    } else if (this.showHistory) {
      this._voiceService.speak(this.word._adjSpeakPL);
    }
  }
}
