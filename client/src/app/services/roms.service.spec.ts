import { TestBed } from '@angular/core/testing';

import { RomsService } from './roms.service';

describe('RomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomsService = TestBed.get(RomsService);
    expect(service).toBeTruthy();
  });
});
