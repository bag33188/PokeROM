declare global {
  interface String {
    removeStringChars(): string;
  }
}

// tslint:disable-next-line:only-arrow-functions
String.prototype.removeStringChars = function(): string {
  const detectStringChars: RegExp = /([\u0022\u0027\u2018\u2019\u201C\u201D\u0060\u00B4\u055D\u055B])/gim;
  return this.replace(detectStringChars, '');
};

export default String.prototype.removeStringChars;
