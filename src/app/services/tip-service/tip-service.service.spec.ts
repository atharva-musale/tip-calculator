import { TestBed } from '@angular/core/testing';

import { TipServiceService } from './tip-service.service';

describe('TipServiceService', () => {
  let service: TipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
