import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {ChallengeResult, LevelStatus} from "@model";

@Component({
  selector: 'app-level-menu',
  templateUrl: './level-menu.component.html',
  styleUrls: ['./level-menu.component.scss']
})
export class LevelMenuComponent implements AfterViewInit{
 @Input() level!: LevelStatus;
 @Input() category_id!: string;
 @Input() challengeResult: ChallengeResult | null = null;

  constructor(private _elementRef: ElementRef) {
 }

 ngAfterViewInit() {
   this._elementRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
 }
}
