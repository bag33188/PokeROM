import { TestBed } from '@angular/core/testing';

import { SizeConversionService } from './size-conversion.service';

describe('SizeConversionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeConversionService = TestBed.get(SizeConversionService);
    expect(service).toBeTruthy();
  });
});
