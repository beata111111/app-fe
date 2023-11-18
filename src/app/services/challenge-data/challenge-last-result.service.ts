import { Injectable } from "@angular/core";
import {ChallengeResult, VariantSignature} from "@model";
import {compareVariantSignatures} from "@helpers";

@Injectable({ providedIn: "root" })
export class ChallengeLastResultService {
  lastResult: ChallengeResult | null = null;

  setLastResult(result: ChallengeResult): void {
    this.lastResult = result;
  }

  getLastResult(signature: VariantSignature): number | null {
    const hasNewResult =
      this.lastResult && compareVariantSignatures(this.lastResult, signature);

    if (!hasNewResult) return null;

    const result = this.lastResult?.result ?? null;
    setTimeout(() => {
      this.lastResult = null;
    }, 5000);
    return result;
  }
}
