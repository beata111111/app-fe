import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

export type ButtonType = "primary" | "secondary" | "ghost";

@Directive({
  selector: "[appButton]",
})
export class ButtonDirective {
  constructor(private el: ElementRef) {}

  @Input() appButton: ButtonType = "primary";
  @HostBinding("class") class = "btn";

  @HostBinding("class.btn-primary") get a() {
    return this.appButton === "primary";
  }

  @HostBinding("class.btn-secondary") get b() {
    return this.appButton === "secondary";
  }

  @HostBinding("class.btn-ghost") get c() {
    return this.appButton === "ghost";
  }

  @HostListener("click")
  aaa() {
    this.el.nativeElement.classList.add("active");
    setTimeout(() => {
      this.el.nativeElement.classList.remove("active");
    }, 100);
  }
}
