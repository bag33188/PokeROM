import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {
  @Input() public btnType: string;
  private preClasses: string[];

  constructor(private el: ElementRef) {}

  ngOnInit(): void | never {
    this.preClasses = [
      'btn',
      !/(outline)/.test(this.btnType) ? 'btn-shadow' : null
    ];
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
          return [...this.preClasses, 'btn-outline-primary'];
        case 'secondary-outline':
          return [...this.preClasses, 'btn-outline-secondary'];
        case 'warning-outline':
          return [...this.preClasses, 'btn-outline-warning'];
        case 'success-outline':
          return [...this.preClasses, 'btn-outline-success'];
        case 'danger-outline':
          return [...this.preClasses, 'btn-outline-danger'];
        case 'info-outline':
          return [...this.preClasses, 'btn-outline-info'];
        case 'light-outline':
          return [...this.preClasses, 'btn-outline-light'];
        case 'dark-outline':
          return [...this.preClasses, 'btn-outline-dark'];
        case 'primary':
          return [...this.preClasses, 'btn-primary'];
        case 'secondary':
          return [...this.preClasses, 'btn-secondary'];
        case 'warning':
          return [...this.preClasses, 'btn-warning'];
        case 'success':
          return [...this.preClasses, 'btn-success'];
        case 'danger':
          return [...this.preClasses, 'btn-danger'];
        case 'info':
          return [...this.preClasses, 'btn-info'];
        case 'light':
          return [...this.preClasses, 'btn-light'];
        case 'dark':
          return [...this.preClasses, 'btn-dark'];
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
