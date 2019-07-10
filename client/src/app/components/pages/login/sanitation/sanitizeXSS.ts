declare global {
  interface String {
    sanitizeXSS(logValues: boolean): string;
  }
}

String.prototype.sanitizeXSS = function(logValues: boolean): string {
  const checkXSS: RegExp = new RegExp(
    /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[&'"<>\)\(\\\/\{\}\[\]\:\;\^\*])/,
    'gim'
  );
  const sanitizedStr: string = this.replace(checkXSS, '');
  if (logValues) {
    console.log(this);
  }
  return sanitizedStr;
};

export default String.prototype.sanitizeXSS;
