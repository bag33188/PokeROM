import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit {
  @Input() public alertType: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setType();
  }

  private getType(): string[] {
    if (typeof this.alertType === 'string') {
      switch (this.alertType) {
        case 'primary':
          return ['alert', 'alert-primary'];
        case 'secondary':
          return ['alert', 'alert-secondary'];
        case 'warning':
          return ['alert', 'alert-warning'];
        case 'success':
          return ['alert', 'alert-success'];
        case 'danger':
          return ['alert', 'alert-danger'];
        case 'info':
          return ['alert', 'alert-info'];
        case 'light':
          return ['alert', 'alert-light'];
        case 'dark':
          return ['alert', 'alert-dark'];
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
