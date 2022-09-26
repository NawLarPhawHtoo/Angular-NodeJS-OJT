import { TestBed } from '@angular/core/testing';

import { InMomeryDataService } from './in-momery-data.service';

describe('InMomeryDataService', () => {
  let service: InMomeryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMomeryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
