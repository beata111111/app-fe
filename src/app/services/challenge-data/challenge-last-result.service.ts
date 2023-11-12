import { Injectable } from "@angular/core";
import {ChallengeResult, VariantSignature} from "@model";

@Injectable({ providedIn: "root" })
export class ChallengeLastResultService {
  lastResult: ChallengeResult | null = null;

  setLastResult(result: ChallengeResult): void {
    this.lastResult = result;
  }

  getLastResult(signature: VariantSignature): number | null {
    const hasNewResult =
      this.lastResult &&
      this.lastResult.category_id === signature.category_id &&
      this.lastResult.level_id === signature.level_id &&
      this.lastResult.variant_id === signature.variant_id;

    if (!hasNewResult) return null;

    const result = this.lastResult?.result ?? null;
    this.lastResult = null;
    return result;
  }
}
