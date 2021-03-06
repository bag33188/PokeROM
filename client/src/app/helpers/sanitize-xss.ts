import he from 'he';

interface Options {
  replaceSpecialChars?: boolean;
  encode?: boolean;
}

declare global {
  interface String {
    sanitizeXSS(options?: Options): string;
  }
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.sanitizeXSS = function(options?: Options): string {
  const checkXSS: RegExp = /(?:(<\/?[\s\S]*?>)|(javascript:(?:[^:]\s?)+))/gim;
  const checkChars: RegExp = /(?:([&'"<>)(\\\/{}\[\]:;^*]))/gim;
  let sanitizedStr: string = this.replace(checkXSS, '');
  if (options !== null && options !== undefined) {
    if (options.replaceSpecialChars === true) {
      sanitizedStr = sanitizedStr.replace(checkChars, '');
    }
    if (options.encode === true) {
      sanitizedStr = he.encode(sanitizedStr);
    }
  }
  return sanitizedStr;
};

export default String.prototype.sanitizeXSS;
