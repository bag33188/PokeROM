import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';

type cachedJSON = JSONObject | JSONArray | null;

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: cachedJSON = null;
  private cachedUrl: string = '';

  constructor(private http: HttpClient) {}

  public transform(url: string): cachedJSON {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe((result: cachedJSON): void => {
        this.cachedData = result;
      });
    }
    return this.cachedData;
  }
}
