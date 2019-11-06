import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {
  @Input() public btnType: string | string[];
  constructor(private el: ElementRef) {}
  @HostListener('window:DOMSubtreeModified') domSubtreeModified() {
    this.setType();
  }
  private getType(): string[] {
    if (Array.isArray(this.btnType)) {
      if (
        typeof this.btnType[0] === 'string' &&
        typeof this.btnType[1] === 'string'
      ) {
        if (this.btnType[0] === 'outline') {
          switch (this.btnType[1]) {
            case 'primary':
              return ['btn', 'btn-outline-primary'];
            case 'warning':
              return ['btn', 'btn-outline-warning'];
            case 'success':
              return ['btn', 'btn-outline-success'];
            case 'danger':
              return ['btn', 'btn-outline-danger'];
            case 'info':
              return ['btn', 'btn-outline-info'];
            case 'light':
              return ['btn', 'btn-outline-light'];
            case 'dark':
              return ['btn', 'btn-outline-dark'];
          }
        } else {
          throw new Error('First arg if array must be outline.');
        }
      } else {
        throw new Error('Invalid type.');
      }
    } else if (typeof this.btnType === 'string') {
      switch (this.btnType) {
        case 'primary':
          return ['btn', 'btn-primary'];
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
      }
    } else {
      throw new Error('Invalid type.');
    }
  }
  private setType(): void {
    this.getType().forEach((cssClass: string): void => {
      this.el.nativeElement.classList.add(cssClass);
    });
  }
}
