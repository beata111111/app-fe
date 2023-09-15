import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {VariantStatus} from "@model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnChanges {
  @Input() variant!: VariantStatus;
  @Input() category_id!: string;
  @Input() level_id!: string;

  color100 = '#6fe594';
  color80 = '#aee58f';
  color60 = '#cfe397';
  color40 = '#FACD84';
  color20 = '#f6a678';
  colorDisabled = '#fbfbfb';
  colorDefault = '#e9e9e0'

  color: string = this.colorDefault;

  constructor(private _router: Router) {
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
