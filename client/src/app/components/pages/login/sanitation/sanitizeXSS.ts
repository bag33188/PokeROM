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
  return this.replace(checkXSS, '');
};

export default String.prototype.sanitizeXSS;
