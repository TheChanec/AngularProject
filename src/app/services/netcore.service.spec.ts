import { TestBed, inject } from '@angular/core/testing';

import { NetcoreService } from './netcore.service';

describe('NetcoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetcoreService]
    });
  });

  it('should be created', inject([NetcoreService], (service: NetcoreService) => {
    expect(service).toBeTruthy();
  }));
});
