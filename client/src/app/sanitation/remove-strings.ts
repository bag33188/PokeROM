declare global {
  interface String {
    removeStrings(replaceContent: boolean): string;
  }
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.removeStrings = function(replaceContent: boolean): string {
  let sanitizedStr: string = '';
  if (replaceContent) {
    const detectStrings: RegExp = new RegExp(
      /(?:('.*')|(".*")|(`(.?\n?)+`))/,
      'gim'
    );
    sanitizedStr = sanitizedStr.replace(detectStrings, '');
  } else {
    const detectStringChars: RegExp = new RegExp(/(?:(["'`]))/, 'gim');
    sanitizedStr = sanitizedStr.replace(detectStringChars, '');
  }
  return sanitizedStr;
};

export default String.prototype.removeStrings;
