import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input, OnDestroy,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {AccordionService} from "./accordion.service";
import { v4 as uuidv4 } from 'uuid';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit, OnDestroy {
  @Input() title = '';
  @Input() content!: TemplateRef<unknown>;

  isOpen = false;
  contentHeight = 0;

  private _id: string = uuidv4();
  private _subscriptions = new Subscription();

  @ViewChild('absoluteContent') absoluteContent!: ElementRef;
  @HostBinding('class.is-open') get getIsOpen(): boolean {
    return this.isOpen;
  }

  constructor(private _accordionService: AccordionService) {
    this._subscriptions.add(
      this._accordionService.accordionChanged$.subscribe(id => {
        if (id !== this._id) {
          this.isOpen = false;
        }
      })
    );
  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this._accordionService.setOpenAccordion(this._id);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.contentHeight = this.absoluteContent.nativeElement.offsetHeight;
      this.absoluteContent.nativeElement.remove();
    });
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
