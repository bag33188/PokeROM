import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {
  @Input() public btnType: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void | never {
    if (!this.btnType) {
      throw new Error('No button type specified.');
    } else {
      this.setType();
    }
  }

  private getType(): string[] | never {
    if (typeof this.btnType === 'string') {
      switch (this.btnType) {
        case 'primary-outline':
          return ['btn', 'btn-outline-primary'];
        case 'secondary-outline':
          return ['btn', 'btn-outline-secondary'];
        case 'warning-outline':
          return ['btn', 'btn-outline-warning'];
        case 'success-outline':
          return ['btn', 'btn-outline-success'];
        case 'danger-outline':
          return ['btn', 'btn-outline-danger'];
        case 'info-outline':
          return ['btn', 'btn-outline-info'];
        case 'light-outline':
          return ['btn', 'btn-outline-light'];
        case 'dark-outline':
          return ['btn', 'btn-outline-dark'];
        case 'primary':
          return ['btn', 'btn-primary'];
        case 'secondary':
          return ['btn', 'btn-secondary'];
        case 'warning':
          return ['btn', 'btn-warning'];
        case 'success':
          return ['btn', 'btn-success'];
        case 'danger':
          return ['btn', 'btn-danger'];
        case 'info':
          return ['btn', 'btn-info'];
        case 'light':
          return ['btn', 'btn-light'];
        case 'dark':
          return ['btn', 'btn-dark'];
        default:
          throw new Error('Invalid button type.');
      }
    } else {
      throw new Error('Type must be a string.');
    }
  }

  private setType(): void {
    const typeArr: string[] = this.getType();
    const classList: DOMTokenList = this.el.nativeElement.classList;
    typeArr.forEach((className: string): void => {
      if (Array.from(classList).includes(className)) {
        this.el.nativeElement.classList.remove(className);
      }
      this.el.nativeElement.classList.add(className);
    });
  }
}