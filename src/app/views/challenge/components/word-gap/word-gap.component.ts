import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-word-gap",
  templateUrl: "./word-gap.component.html",
  styleUrls: ["./word-gap.component.scss"],
})
export class WordGapComponent implements OnInit {
  @Input() showAnswer = false;
  @Input() answer!: string;

  @HostBinding("class.show-answer") get getShowAnswer(): boolean {
    return this.showAnswer;
  }

  constructor() {}

  ngOnInit(): void {}
}
