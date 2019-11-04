declare global {
  interface String {
    validatePhoneNumber(options: Options): PhoneNumberValidator;
  }
}

abstract class PhoneNumberValidator {
  abstract match: RegExpMatchArray;
  abstract test: boolean;
  abstract text?: string;
}

interface Options {
  showTextOutput: boolean;
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.validatePhoneNumber = function(
  options: Options
): PhoneNumberValidator {
  // regular expression tested with https://regexr.com
  const phoneNumberRegex: RegExp = /^(?:([2-9]1{2})|(?:(\+?1\s*(?:[.-]\s*)?)?(?:\(?\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)?)\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(\x20+|#|x\.?|ext\.?|extension)\s*(\d+))?)$/i;
  const phoneNumberMatch: RegExpMatchArray = this.match(phoneNumberRegex);
  const phoneNumberTest: boolean = phoneNumberRegex.test(this);
  const resultData: PhoneNumberValidator = {
    match: phoneNumberMatch,
    test: phoneNumberTest
  };
  if (options.showTextOutput) {
    return {
      ...resultData,
      text: `${this} = ${resultData.test ? 'valid' : 'invalid'}`
    };
  } else {
    return resultData;
  }
};

export default String.prototype.validatePhoneNumber;
