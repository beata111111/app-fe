import {Injectable} from '@angular/core';

@Injectable()
export class DiamondCounterService {
  _previousValue: number | null = null;
  _lastValue: number | null = null;
  _showAnimation = false;

  constructor() {
  }

  setLastValue(value: any): void {
    const isDifferent = this._lastValue !== value;
    if (isDifferent) {
      this._previousValue = this._lastValue;
      this._lastValue = value;
    }
    this._showAnimation = isDifferent;
  }

  showAnimation(): boolean {
    const result = this._showAnimation && this._previousValue !== null;
    this._showAnimation = false;
    return result;
  }
}
