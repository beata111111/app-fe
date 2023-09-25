import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChallengeResult, VariantStatus} from "@model";
import {Router} from "@angular/router";
import {ChallengeLastResultService} from "@services";
import {getStatusColor} from "@helpers";

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

  color: string = '';

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

  ngOnChanges(changes: SimpleChanges) {
    const { enabled, result } = changes['variant'].currentValue;
    this.color = getStatusColor(enabled, result);
  }

  private _setIdUpdatedTimeout() {
    const lastResult = this._challengeLastResultService.lastResult;
    if (!lastResult || !this.variant.enabled) return;

    this._isUpdatedTimeout = setTimeout(() => {
      this._challengeLastResultService.deleteLastResult();
      this._checkIsUpdated(lastResult);
    }, 800);
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
