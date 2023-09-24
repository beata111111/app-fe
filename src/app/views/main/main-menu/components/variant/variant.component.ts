import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChallengeResult, VariantStatus} from "@model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit, OnChanges {
  @Input() variant!: VariantStatus;
  @Input() category_id!: string;
  @Input() level_id!: string;
  @Input() challengeResult: ChallengeResult | null = null;

  color100 = '#6fe594';
  color80 = '#aee58f';
  color60 = '#cfe397';
  color40 = '#FACD84';
  color20 = '#f6a678';
  colorDisabled = '#f1f1f1';
  colorDefault = '#c8c8c8'

  color: string = this.colorDefault;
  isUpdated = false;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    if (!this.challengeResult) return;
    const {finishedCategory, finishedLevel, finishedVariant, finishedResult} = this.challengeResult;

    this.isUpdated = this.variant.variant_id === finishedVariant
      && this.level_id === String(finishedLevel)
      && this.category_id === finishedCategory;
  }

  navigateToChallenge(variant: string): void {
    this._router.navigate(['/challenge', this.category_id, this.level_id, variant]);
  }

  setButtonColor(enabled: boolean, result: number): void {
    if (!enabled) {
      this.color = this.colorDisabled;
    } else if (result === 100) {
      this.color = this.color100;
    } else if (result >= 80) {
      this.color = this.color80;
    } else if (result >= 60) {
      this.color = this.color60;
    } else if (result >= 40) {
      this.color = this.color40;
    } else if (result >= 20) {
      this.color = this.color20;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const { enabled, result } = changes['variant'].currentValue;
    this.setButtonColor(enabled, result);
  }
}
