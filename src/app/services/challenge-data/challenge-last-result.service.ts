import {Injectable} from '@angular/core';
import {ChallengeResult} from "@model";

@Injectable({ providedIn: 'root' })
export class ChallengeLastResultService {

  lastResult: ChallengeResult | null = null;

  setLastResult(result: ChallengeResult): void {
    this.lastResult = result;
  }

  getLastResult(category_id: string, level_id: string, variant_id: string): number | null {
    const hasNewResult = this.lastResult
    && this.lastResult.category_id === category_id
    && this.lastResult.level_id === level_id
    && this.lastResult.variant_id === variant_id;

    if (!hasNewResult) return null;

    const result = this.lastResult?.result ?? null;
    this.lastResult = null;
    return result;
  }
}
