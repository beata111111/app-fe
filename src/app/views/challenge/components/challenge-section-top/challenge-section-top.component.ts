import { Component, Input, TemplateRef, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-challenge-section-top",
  templateUrl: "./challenge-section-top.component.html",
  styleUrls: ["./challenge-section-top.component.scss"],
  encapsulation: ViewEncapsulation.None,
  host: { class: "host-element" },
})
export class ChallengeSectionTopComponent {
  @Input() topContent!: TemplateRef<unknown>;
  @Input() bottomContent!: TemplateRef<unknown>;

  @Input() showHistory = false;
  @Input() showAnswer = false;
  @Input() lastAnswerCorrect = false;
}
