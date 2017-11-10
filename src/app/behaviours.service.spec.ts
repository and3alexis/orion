import { TestBed, inject } from '@angular/core/testing';

import { BehavioursService } from './behaviours.service';

describe('BehavioursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehavioursService]
    });
  });

  it('should be created', inject([BehavioursService], (service: BehavioursService) => {
    expect(service).toBeTruthy();
  }));
});
