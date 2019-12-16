import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  pure: false
})
export class DefaultImagePipe implements PipeTransform {
  private cachedUrl: string = null;
  constructor() {}
  public transform(
    value: string,
    fallback: string,
    element: ElementRef,
    forceHttps: boolean = false
  ): string {
    if (element !== undefined) {
      if (value !== this.cachedUrl) {
        this.cachedUrl = value;
        if (forceHttps) {
          if (fallback.indexOf('https') < 0) {
            fallback = fallback.replace(/http:\/\//i, 'https://');
          }
        }
        // tslint:disable-next-line:only-arrow-functions
        element.nativeElement.onerror = function(): void {
          this.onerror = null;
          element.nativeElement.src = fallback;
        };
      }
    }
    return value;
  }
}
