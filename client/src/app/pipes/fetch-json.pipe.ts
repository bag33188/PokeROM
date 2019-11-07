import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Json } from '../models/Json';

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: Json = null;
  private cachedUrl: string = '';

  constructor(private http: HttpClient) {}

  public transform(url: string): Json {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe((result: Json): void => {
        this.cachedData = result;
      });
    }
    return this.cachedData;
  }
}
