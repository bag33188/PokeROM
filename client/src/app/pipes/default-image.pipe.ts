import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'defaultImage',
  pure: false
})
export class DefaultImagePipe implements PipeTransform {
  private cachedUrl: string = '';
  private cachedImageUrl: string = '';
  constructor(private http: HttpClient) {}
  public transform(
    value: string,
    fallback: string,
    forceHttps: boolean = false
  ): string {
    this.cachedImageUrl = value;
    if (value !== this.cachedUrl) {
      this.cachedUrl = value;
      this.http.get(this.cachedUrl).subscribe(
        (): void => {
          this.cachedImageUrl =
            this.cachedUrl !== null &&
            this.cachedUrl !== undefined &&
            this.cachedUrl.length > 0
              ? this.cachedUrl
              : fallback;
        },
        (err: object): void => {
          this.cachedImageUrl =
            // tslint:disable-next-line:no-string-literal
            err['status'] === 404 ? fallback : this.cachedUrl;
        },
        (): void => {
          this.forceHttps(forceHttps);
        }
      );
    }
    return this.cachedImageUrl;
  }

  private forceHttps(forceHttps: boolean): void {
    if (forceHttps) {
      if (this.cachedImageUrl.indexOf('https') < 0) {
        this.cachedImageUrl = this.cachedImageUrl.replace(
          /http:\/\//i,
          'https://'
        );
      }
    }
  }
}
