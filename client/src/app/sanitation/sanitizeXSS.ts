import he from 'he';

declare global {
  interface String {
    sanitizeXSS(replaceSpecialChars?: boolean): string;
  }
}

String.prototype.sanitizeXSS = function(replaceSpecialChars?: boolean): string {
  const checkXSS: RegExp = new RegExp(
    /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)))/,
    'gim'
  );
  const checkChars: RegExp = new RegExp(
    /(?:([&'"<>\)\(\\\/\{\}\[\]\:\;\^\*]))/,
    'gim'
  );
  let sanitizedStr: string = this.replace(checkXSS, '');
  if (replaceSpecialChars) {
    sanitizedStr = sanitizedStr.replace(checkChars, '');
  }
  if (!replaceSpecialChars) {
    sanitizedStr = he.encode(sanitizedStr);
  }
  return sanitizedStr;
};

export default String.prototype.sanitizeXSS;
