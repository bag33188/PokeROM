import { FetchJsonPipe } from './fetch-json.pipe';
import { HttpClient, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('FetchJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new FetchJsonPipe(
      new HttpClient({ handle: () => new Observable<HttpEvent<any>>() })
    );
    expect(pipe).toBeTruthy();
  });
});
