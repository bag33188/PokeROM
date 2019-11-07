import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl: string = '';

  constructor(private http: HttpClient) {}

  public transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe((result: any): void => {
        this.cachedData = result;
      });
    }
    return this.cachedData;
  }
}
