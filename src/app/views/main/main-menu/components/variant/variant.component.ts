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
  @Input() category_id!: string;
  @Input() level_id!: string;

  constructor(private _router: Router) {
  }

  navigateToChallenge(variant: string): void {
    this._router.navigate(['/challenge', this.category_id, this.level_id, variant]);
  }
}
