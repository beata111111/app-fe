import {Directive} from '@angular/core';

@Directive({selector: 'abstract-popup-dialog'})
export abstract class AbstractPopupDialogDirective {
  abstract stepsCount: number;
  abstract currentStep: number;

  config = {
    nextButtonText: 'n',
    backButtonText: 'p'
  }


  constructor() {
  }

  next() {
    const nextStep = this.currentStep + 1;
    if ( nextStep <= this.stepsCount ) {
      this.currentStep = nextStep;
    }
  }

  back() {
    const previousStep =  this.currentStep - 1;
    if ( previousStep >= 1 ) {
      this.currentStep = this.currentStep - 1;
    }
  }
}
