declare global {
  interface String {
    removeStrings(): string;
  }
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.removeStrings = function(): string {
  const detectStringChars: RegExp = /(?:(["'`]))/gim;
  return this.replace(detectStringChars, '');
};

export default String.prototype.removeStrings;
