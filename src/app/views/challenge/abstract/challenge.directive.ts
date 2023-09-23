import {Directive} from '@angular/core';
import {AbstractChallengeHistoryComponent} from "./challenge-history.directive";

@Directive()
export abstract class AbstractChallengeComponent extends AbstractChallengeHistoryComponent {
  constructor() {
    super();
  }
}
