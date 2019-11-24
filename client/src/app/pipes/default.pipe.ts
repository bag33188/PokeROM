import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultPipe implements PipeTransform {
  constructor() {}
  public transform(
    value: string,
    fallback: string,
    forceHttps: boolean = false
  ): string {
    let imageUrl = value ? value : fallback;

    if (forceHttps) {
      if (imageUrl.indexOf('https') < 0) {
        imageUrl = imageUrl.replace('http', 'https');
      }
    }

    return imageUrl;
  }
}
