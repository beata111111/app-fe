import { Component, HostBinding, Input, OnDestroy, OnInit } from "@angular/core";
import { ChallengeResult, VariantSignature, VariantStatus } from "@model";
import { Router } from "@angular/router";
import { ChallengeLastResultService } from "@services";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { BehaviorSubject, map, Observable, Subscription, tap } from "rxjs";
import { compareVariantSignatures, createSignature, getStatusColor } from "@helpers";
import { MainMenuService } from "../../main-menu.service";

@Component({
  selector: "app-variant",
  templateUrl: "./variant.component.html",
  styleUrls: ["./variant.component.scss"],
})
export class VariantComponent implements OnInit, OnDestroy {
  faGem = faGem;
  faLock = faLock;
  @Input() variant!: VariantStatus;
  @Input() category_id!: string;
  @Input() level_id!: string;
  @Input() challengeResult: ChallengeResult | null = null;

  private _signature!: VariantSignature;
  private _animationTimeout: any;
  private _subscription = new Subscription();

  color$: Observable<string>;
  displayedResult$ = new BehaviorSubject<number>(0);
  displayedResult = 0;

  hasNewResult = false;
  resultDelta = 0;

  isNewlyEnabled = false;

  constructor(
    private _router: Router,
    private _challengeLastResultService: ChallengeLastResultService,
    private _mainMenuService: MainMenuService,
  ) {
    this.color$ = this.displayedResult$.pipe(
      tap((v) => this.displayedResult = v),
      map((result) => getStatusColor(result, this.variant.enabled)),
    );
  }

  ngOnInit() {
    this._signature = createSignature(this.category_id, this.level_id, this.variant);

    this._subscription.add(
      this._mainMenuService.categoryData$.subscribe(() => {
        const newResult = this._challengeLastResultService.getLastResult(this._signature);

        this.hasNewResult = !!newResult;

        if (newResult && newResult > this.variant.previousResult) {
          this.hasNewResult = true;
          this.resultDelta = this.variant.result - this.variant.previousResult;
          this.displayedResult$.next(this.variant.previousResult);

          this._animationTimeout = setTimeout(() => {
            this.displayedResult$.next(this.variant.result);
          }, 1500);
        } else {
          this.displayedResult$.next(this.variant.result);
        }
      }),
    );

    this._subscription.add(
      this._mainMenuService.newlyEnabledVariants$.subscribe((arr: VariantSignature[]) => {
        const isNewlyEnabled = arr.some((signature) => {
          return compareVariantSignatures(signature, this._signature);
        }); // write only if positive to prevent overwrite with false
        if (isNewlyEnabled) this.isNewlyEnabled = isNewlyEnabled;
      }),
    );
  }

  navigateToChallenge(variant: string): void {
    this._router.navigate(["/challenge", this.category_id, this.level_id, variant]);
  }

  ngOnDestroy() {
    clearTimeout(this._animationTimeout);
    this._subscription.unsubscribe();
  }

  @HostBinding("class.has-new-result") get isUpdating() {
    return this.hasNewResult;
  }
  @HostBinding("class.has-new-highest-result") get isUpdatingNew() {
    return this.hasNewResult && this.resultDelta;
  }
  @HostBinding("class.is-newly-enabled") get isNew() {
    return this.isNewlyEnabled;
  }
}
