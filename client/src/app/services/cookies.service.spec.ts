import { TestBed } from '@angular/core/testing';

import { CookiesService } from './cookies.service';

describe('CookiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookiesService = TestBed.inject(CookiesService);
    expect(service).toBeTruthy();
  });
});
