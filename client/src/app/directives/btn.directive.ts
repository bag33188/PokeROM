import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LoggerService as logger } from '../services/logger.service';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {
  @Input() public btnType: string;
  private preClasses: string[];

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    this.preClasses = [
      'btn',
      !/(outline)/.test(this.btnType) ? 'btn-shadow' : null
    ];
    if (!this.btnType) {
      logger.error('No button type specified.');
    } else {
      this.setType();
    }
  }

  private getType(): string[] {
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
          logger.error('Invalid button type.');
          return new Array<string>();
      }
    } else {
      logger.error('Type must be a string.');
      return new Array<string>();
    }
  }

  private setType(): void {
    const typeArr: string[] = this.getType();
    const classList: DOMTokenList = this.el.nativeElement.classList;
    typeArr.forEach((className: string): void => {
      if (Array.from(classList).includes(className)) {
        classList.remove(className);
      }
      classList.add(className);
    });
    if (Array.prototype.slice.call(classList).indexOf('null') > -1) {
      classList.remove('null');
    }
  }
}
