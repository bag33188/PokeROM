import { Component, Input, OnInit } from '@angular/core';
import { NgClasses } from '../../../interfaces/NgClasses';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'spinners-bootstrap-spinner',
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

  public ngOnInit(): void {
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

  private getType(): string {
    if (typeof this.spinnerType === 'string') {
      switch (this.spinnerType) {
        case 'border':
          return 'spinner-border';
        case 'grow':
          return 'spinner-grow';
        default:
          logger.error('Invalid type.');
      }
    } else {
      logger.error('Type must be a string.');
    }
  }

  private getColor(): string {
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
          logger.error('Invalid color.');
      }
    } else {
      logger.error('Color must be a string.');
    }
  }

  private checkForErrors(): boolean {
    if (!this.spinnerType) {
      logger.error('Type is required.');
      return true;
    }
    if (!this.spinnerColor) {
      logger.error('Color is required.');
      return true;
    }
    if (this.loading === undefined || this.loading === null) {
      logger.error('Loading property is required.');
      return true;
    }
    if (
      this.spaced !== undefined &&
      this.spaced !== null &&
      typeof this.spaced !== 'boolean'
    ) {
      logger.error('Spaced property must be a boolean.');
      return true;
    }
    if (this.customSize && typeof this.customSize !== 'number') {
      logger.error('Custom size property must be a number data-type.');
      return true;
    }
    return false;
  }
}
