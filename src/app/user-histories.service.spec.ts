import { TestBed, inject } from '@angular/core/testing';

import { UserHistoriesService } from './user-histories.service';

describe('UserHistoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHistoriesService]
    });
  });

  it('should be created', inject([UserHistoriesService], (service: UserHistoriesService) => {
    expect(service).toBeTruthy();
  }));
});
