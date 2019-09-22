import he from 'he';

declare global {
  interface String {
    sanitizeXSS(replaceSpecialChars?: boolean, encode?: boolean): string;
  }
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.sanitizeXSS = function(
  replaceSpecialChars?: boolean,
  encode?: boolean
): string {
  let checkXSS: RegExp;
  checkXSS = /(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))/gim;
  const checkChars: RegExp = /(?:([&'"<>)(\\\/{}\[\]:;^*]))/gim;
  let sanitizedStr: string = this.replace(checkXSS, '');
  if (replaceSpecialChars) {
    sanitizedStr = sanitizedStr.replace(checkChars, '');
  }
  if (encode) {
    sanitizedStr = he.encode(sanitizedStr);
  }
  return sanitizedStr;
};

export default String.prototype.sanitizeXSS;
