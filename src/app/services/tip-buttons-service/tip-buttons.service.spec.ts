import {
  TestBed,
} from '@angular/core/testing';
import {
  take,
} from 'rxjs/operators';
import {
  TipButtonsService,
} from './tip-buttons.service';

describe('TipButtonsService', () => {
  let service: TipButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('selectButton should emit index of the new button selected', (done) => {
    service.selectButton(3);

    service.selectedButton$.pipe(take(1)).subscribe((index) => {
      expect(index).toBe(3);
      done();
    });
  });
});
