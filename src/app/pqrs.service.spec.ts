import { TestBed, inject } from '@angular/core/testing';

import { PqrsService } from './pqrs.service';

describe('PqrsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PqrsService]
    });
  });

  it('should be created', inject([PqrsService], (service: PqrsService) => {
    expect(service).toBeTruthy();
  }));
});
