import { TestBed } from '@angular/core/testing';

import { RatingService } from './rating.service';

describe('RatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatingService = TestBed.inject(RatingService);
    expect(service).toBeTruthy();
  });
});
