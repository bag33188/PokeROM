declare global {
  interface String {
    sanitizeXSS(): string;
  }
}

String.prototype.sanitizeXSS = function(): string {
  const checkXSS: RegExp = new RegExp(
    /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[&'"<>\)\(\\\/\{\}\[\]\:\;\^\*])/,
    'gim'
  );
  const sanitizedStr: string = this.replace(checkXSS, '');
  return sanitizedStr;
};

export default String.prototype.sanitizeXSS;
