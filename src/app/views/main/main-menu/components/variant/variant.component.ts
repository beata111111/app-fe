import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {ChallengeResult, VariantSignature, VariantStatus} from "@model";
import { Router } from "@angular/router";
import { ChallengeLastResultService } from "@services";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {BehaviorSubject, map, Observable, Subscription} from "rxjs";
import { getStatusColor } from "@helpers";
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

  private _animationTimeout: any;
  private _subscription =  new Subscription();

  color$: Observable<string>;
  displayedResult$ = new BehaviorSubject<number>(0);
  hasNewResult = false;
  resultDelta = 0;

  newlyCreated = false;

  constructor(
    private _router: Router,
    private _challengeLastResultService: ChallengeLastResultService,
    private _mainMenuService: MainMenuService,
  ) {
    this.color$ = this.displayedResult$.pipe(
      map((result) => getStatusColor(result, this.variant.enabled)),
    );
  }

  ngOnInit() {
    const newResult = this._challengeLastResultService.getLastResult(
      this.category_id,
      this.level_id,
      this.variant.variant_id,
    );
    this.hasNewResult = !!newResult;

    if (
      newResult &&
      newResult === this.variant.result &&
      newResult > this.variant.previousResult
    ) {
      this.resultDelta = this.variant.result - this.variant.previousResult;
      this.displayedResult$.next(this.variant.previousResult);

      this._animationTimeout = setTimeout(() => {
        this.displayedResult$.next(this.variant.result);
      }, 1500);
    } else {
      this.displayedResult$.next(this.variant.result);
    }

    this._subscription.add(
      this._mainMenuService.newlyEnabledVariants$.subscribe((arr: VariantSignature[]) => {
        const newlyCreated = arr.some((signature) => {
          return signature.category_id === this.category_id
            && signature.level_id === this.level_id
            && signature.variant_id === this.variant.variant_id
        });
        if (newlyCreated) { // write only if positive
          this.newlyCreated = newlyCreated;
        }
      })
    )
  }

  navigateToChallenge(variant: string): void {
    this._router.navigate([
      "/challenge",
      this.category_id,
      this.level_id,
      variant,
    ]);
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
  @HostBinding("class.is-new") get isNew() {
    return this.newlyCreated;
  }
}
