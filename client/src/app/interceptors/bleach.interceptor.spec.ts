import { TestBed } from '@angular/core/testing';

import { BleachInterceptor } from './a/bleach.interceptor';

describe('BleachInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BleachInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BleachInterceptor = TestBed.inject(BleachInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
