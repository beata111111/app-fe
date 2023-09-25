import {Injectable} from '@angular/core';
import {ChallengeResult} from "@model";

@Injectable({ providedIn: 'root' })
export class ChallengeLastResultService {

  lastResult: ChallengeResult | null = null;

  setLastResult(result: ChallengeResult): void {
    this.lastResult = result;
  }

  deleteLastResult() {
    this.lastResult = null;
  }
}
