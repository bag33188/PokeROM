declare global {
  interface String {
    validatePhoneNumber(): PhoneNumberValidator;
  }
}

abstract class PhoneNumberValidator {
  abstract match: RegExpMatchArray;
  abstract test: boolean;
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.validatePhoneNumber = function(): PhoneNumberValidator {
  // regular expression tested with https://regexr.com
  const phoneNumberRegex: RegExp = /^(?:([2-9]1{2})|(?:(\+?1\s*(?:[.-]\s*)?)?(?:\(?\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)?)\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(\x20+|#|x\.?|ext\.?|extension)\s*(\d+))?)$/i;
  const phoneNumberMatch: RegExpMatchArray = this.match(phoneNumberRegex);
  const phoneNumberTest: boolean = phoneNumberRegex.test(this);
  return {
    match: phoneNumberMatch,
    test: phoneNumberTest
  };
};

export default String.prototype.validatePhoneNumber;
