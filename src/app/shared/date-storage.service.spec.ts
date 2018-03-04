import { TestBed, inject } from '@angular/core/testing';

import { DateStorageService } from './date-storage.service';

describe('DateStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateStorageService]
    });
  });

  it('should be created', inject([DateStorageService], (service: DateStorageService) => {
    expect(service).toBeTruthy();
  }));
});
