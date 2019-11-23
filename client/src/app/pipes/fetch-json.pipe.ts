import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: JSONObject | JSONArray | null = null;
  private cachedUrl: string = '';

  constructor(private http: HttpClient) {}

  public transform(url: string): JSONObject | JSONArray | null {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http
        .get(url)
        .subscribe((result: JSONObject | JSONArray | null): void => {
          this.cachedData = result;
        });
    }
    return this.cachedData;
  }
}
