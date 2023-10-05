import {Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChallengeResult, VariantStatus} from "@model";
import {Router} from "@angular/router";
import {ChallengeLastResultService} from "@services";
import {getStatusColor} from "@helpers";
import {faGem} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit, OnDestroy {
  faGem = faGem;
  @Input() variant!: VariantStatus;
  @Input() category_id!: string;
  @Input() level_id!: string;
  @Input() challengeResult: ChallengeResult | null = null;

  private _animationTimeout: any;

  color: string = '';
  displayedResult = 0;
  hasNewResult = false;
  resultDelta = 0;

  constructor(private _router: Router,
              private _challengeLastResultService: ChallengeLastResultService) {
  }

  ngOnInit() {
    const newResult = this._challengeLastResultService.getLastResult(this.category_id, this.level_id, this.variant.variant_id);
    this.hasNewResult = !!newResult;

    if (newResult && newResult === this.variant.result && newResult > this.variant.previousResult) {
      this.resultDelta = this.variant.result - this.variant.previousResult;
      this.displayedResult = this.variant.previousResult;
      this.color = getStatusColor(true, this.displayedResult);

      this._animationTimeout = setTimeout(() => {
        this.displayedResult = this.variant.result;
        this.color = getStatusColor(true, this.displayedResult);
      }, 1500);
    } else {
      this.displayedResult = this.variant.result;
      this.color = getStatusColor(true, this.displayedResult);
    }
  }

  navigateToChallenge(variant: string): void {
    this._router.navigate(['/challenge', this.category_id, this.level_id, variant]);
  }

  ngOnDestroy() {
    clearTimeout(this._animationTimeout);
  }

  @HostBinding('class.has-new-result') get isUpdating() {
    return this.hasNewResult;
  }
  @HostBinding('class.has-new-highest-result') get isUpdatingNew() {
    return this.hasNewResult && this.resultDelta;
  }
}
