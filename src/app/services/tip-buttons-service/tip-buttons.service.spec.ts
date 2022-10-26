import { TestBed } from '@angular/core/testing';

import { TipButtonsService } from './tip-buttons.service';

describe('TipButtonsService', () => {
  let service: TipButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
