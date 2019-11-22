import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit {
  @Input() public alertType: string;
  @Input('shadow') public addShadow?: boolean;
  private preClasses: string[];

  constructor(private el: ElementRef) {}

  ngOnInit(): void | never {
    this.preClasses = ['alert', this.addShadow ? 'shadow' : null];
    if (!this.alertType) {
      throw new Error('No alert type specified.');
    } else {
      this.setType();
    }
    if (this.addShadow !== undefined && this.addShadow !== null) {
      if (typeof this.addShadow !== 'boolean') {
        throw new Error('addShadow must be a boolean.');
      }
    }
  }

  private getType(): string[] | never {
    if (typeof this.alertType === 'string') {
      switch (this.alertType) {
        case 'primary':
          return [...this.preClasses, 'alert-primary'];
        case 'secondary':
          return [...this.preClasses, 'alert-secondary'];
        case 'warning':
          return [...this.preClasses, 'alert-warning'];
        case 'success':
          return [...this.preClasses, 'alert-success'];
        case 'danger':
          return [...this.preClasses, 'alert-danger'];
        case 'info':
          return [...this.preClasses, 'alert-info'];
        case 'light':
          return [...this.preClasses, 'alert-light'];
        case 'dark':
          return [...this.preClasses, 'alert-dark'];
        default:
          throw new Error('Invalid alert type.');
      }
    } else {
      throw new Error('Type must be a string.');
    }
  }

  private setType(): void {
    const typeArr: string[] = this.getType();
    const classList: DOMTokenList = this.el.nativeElement.classList;
    typeArr.forEach((className: string): void => {
      if (Array.prototype.slice.call(classList).includes(className)) {
        this.el.nativeElement.classList.remove(className);
      }
      this.el.nativeElement.classList.add(className);
    });
  }
}
