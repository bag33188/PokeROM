import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-spinner',
  templateUrl: './bootstrap-spinner.component.html',
  styleUrls: ['./bootstrap-spinner.component.scss']
})
export class BootstrapSpinnerComponent implements OnInit {
  @Input() public loading: boolean;
  @Input() public type: string;
  @Input() public color: string;
  public _type: string;
  public _color: string;

  constructor() {}

  ngOnInit(): void | never {
    if (!this.type) {
      throw new Error('Type is required.');
    } else if (!this.color) {
      throw new Error('Color is required.');
    } else if (!this.loading) {
      throw new Error('Loading property is required.');
    } else {
      this.setType();
      this.setColor();
    }
  }

  private setType(): void {
    this._type = this.getType();
  }

  private setColor(): void {
    this._color = this.getColor();
  }

  private getType(): string | never {
    if (typeof this.type === 'string') {
      switch (this.type) {
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
    if (typeof this.color === 'string') {
      switch (this.color) {
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
}
