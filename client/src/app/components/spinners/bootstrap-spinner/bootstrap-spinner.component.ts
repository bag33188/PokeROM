import { Component, Input, OnInit } from '@angular/core';
import { NgClasses } from '../../../interfaces/NgClasses';

@Component({
  selector: 'app-bootstrap-spinner',
  templateUrl: './bootstrap-spinner.component.html',
  styleUrls: ['./bootstrap-spinner.component.scss']
})
export class BootstrapSpinnerComponent implements OnInit {
  @Input() public loading: boolean;
  @Input('type') public spinnerType: string;
  @Input('color') public spinnerColor: string;
  @Input('size') public customSize?: number;
  @Input() public spaced?: boolean;
  public type: string;
  public color: string;
  public ngClasses: NgClasses;

  constructor() {}

  ngOnInit(): void | never {
    if (this.checkForErrors() === false) {
      this.setType();
      this.setColor();
      this.ngClasses = {
        [this.type]: true,
        [this.color]: true,
        spacing:
          this.spaced !== undefined &&
          this.spaced !== null &&
          this.spaced === true
      };
    }
  }

  private setType(): void {
    this.type = this.getType();
  }

  private setColor(): void {
    this.color = this.getColor();
  }

  private getType(): string | never {
    if (typeof this.spinnerType === 'string') {
      switch (this.spinnerType) {
        case 'border':
          return 'spinner-border';
        case 'grow':
          return 'spinner-grow';
        default:
          throw new Error('Invalid type.');
      }
    } else {
      throw new Error('Type must be a string.');
    }
  }

  private getColor(): string | never {
    if (typeof this.spinnerColor === 'string') {
      switch (this.spinnerColor) {
        case 'primary':
          return 'text-primary';
        case 'secondary':
          return 'text-secondary';
        case 'success':
          return 'text-success';
        case 'danger':
          return 'text-danger';
        case 'warning':
          return 'text-warning';
        case 'info':
          return 'text-info';
        case 'light':
          return 'text-light';
        case 'dark':
          return 'text-dark';
        default:
          throw new Error('Invalid color.');
      }
    } else {
      throw new Error('Color must be a string.');
    }
  }

  private checkForErrors(): never | boolean {
    if (!this.spinnerType) {
      throw new Error('Type is required.');
    }
    if (!this.spinnerColor) {
      throw new Error('Color is required.');
    }
    if (this.loading === undefined || this.loading === null) {
      throw new Error('Loading property is required.');
    }
    if (
      this.spaced !== undefined &&
      this.spaced !== null &&
      typeof this.spaced !== 'boolean'
    ) {
      throw new Error('Spaced property must be a boolean.');
    }
    if (this.customSize && typeof this.customSize !== 'number') {
      throw new Error('Custom size property must be a number data-type.');
    }
    return false;
  }
}
