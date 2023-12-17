import { TestBed } from '@angular/core/testing';

import { PendingsService } from './pendings.service';

describe('PendingsService', () => {
  let service: PendingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
