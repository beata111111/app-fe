import {EventEmitter, Injectable} from "@angular/core";

@Injectable({ providedIn: 'root'})
export class AccordionService {

  accordionChanged$ = new EventEmitter<string>();

  setOpenAccordion(id: string) {
    this.accordionChanged$.emit(id);
  }

}