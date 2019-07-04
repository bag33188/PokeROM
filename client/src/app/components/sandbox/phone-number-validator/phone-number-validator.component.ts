import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number-validator',
  templateUrl: './phone-number-validator.component.html',
  styleUrls: ['./phone-number-validator.component.scss']
})
export class PhoneNumberValidatorComponent implements OnInit {
  phoneNumberValue: string;
  phoneNumberPattern: RegExp;
  isSubmitted: boolean;

  constructor() {}

  ngOnInit() {
    this.phoneNumberValue = '';
    this.phoneNumberPattern = /^(?:(?:[2-9]11)|(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:\x20+|#|x\.?|ext\.?|extension)\s*(\d+))?)$/i;
    this.isSubmitted = false;
  }

  submitPhoneNumber(): void {
    this.isSubmitted = true;
  }

  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
