import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChallengeResult, VariantStatus} from "@model";
import {Router} from "@angular/router";
import {ChallengeLastResultService} from "@services";

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit, OnChanges, OnDestroy {
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

  private _isUpdatedTimeout: any;
  isUpdated = false;

  constructor(private _router: Router,
              private _challengeLastResultService: ChallengeLastResultService) {
  }

  ngOnInit() {
    this._setIdUpdatedTimeout();
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

  private _setIdUpdatedTimeout() {
    const lastResult = this._challengeLastResultService.lastResult;
    if (!lastResult || !this.variant.enabled) return;

    this._isUpdatedTimeout = setTimeout(() => {
      this._challengeLastResultService.deleteLastResult();
      this._checkIsUpdated(lastResult);
    }, 1000);
  }

  private _checkIsUpdated(challengeResult: ChallengeResult) {
    const { category_id, level_id, variant_id } = challengeResult;

    this.isUpdated = this.category_id === category_id
      && this.level_id === level_id
      && this.variant.variant_id === variant_id
  }

  ngOnDestroy() {
    clearTimeout(this._isUpdatedTimeout);
  }
}
