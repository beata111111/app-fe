import {Component, Input} from '@angular/core';
import {VariantStatus} from "@model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent {
  @Input() variant!: VariantStatus;
  @Input() category!: string;
  @Input() level!: string;

  constructor(private _router: Router) {
  }

  navigateToChallenge(variant: string): void {
    this._router.navigate(['/challenge', this.category, this.level, variant]);
  }
}
