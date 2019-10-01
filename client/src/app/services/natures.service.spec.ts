import { TestBed } from '@angular/core/testing';

import { NaturesService } from './natures.service';

describe('NaturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaturesService = TestBed.inject(NaturesService);
    expect(service).toBeTruthy();
  });
});
