import {Directive, EventEmitter} from '@angular/core';
import {defaultPopupDialogConfig} from "../popup.model";

@Directive({selector: 'abstract-popup-dialog'})
export abstract class AbstractPopupDialogDirective {
  close = new EventEmitter<void>();

  abstract stepsCount: number;
  abstract currentStep: number;

  config = {...defaultPopupDialogConfig};

  next() {
    const nextStep = this.currentStep + 1;
    if ( nextStep <= this.stepsCount ) {
      this.currentStep = nextStep;
    } else {
      this.close.emit();
    }
  }

  back() {
    const previousStep =  this.currentStep - 1;
    if ( previousStep >= 1 ) {
      this.currentStep = this.currentStep - 1;
    }
  }
}
