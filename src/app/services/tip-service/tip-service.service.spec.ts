import {
  TestBed,
} from '@angular/core/testing';
import {
  combineLatest,
} from 'rxjs';
import {
  take,
} from 'rxjs/operators';
import {
  TipServiceService,
} from './tip-service.service';

describe('TipServiceService', () => {
  let service: TipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('totalValue should be updated on updateTotal', (done) => {
    service.updateTotal(1000);

    service.totalValue.pipe(take(1)).subscribe((total) => {
      expect(total).toBe(1000);
      done();
    });
  });

  it('nopValue should be updated on updateNumberOfPeople', (done) => {
    service.updateNumberOfPeople(3);

    service.nopValue.pipe(take(1)).subscribe((nop) => {
      expect(nop).toBe(3);
      done();
    });
  });

  it('tip should be updated on updatePercentTip', (done) => {
    service.updatePercentTip(10);

    service.tipValue.pipe(take(1)).subscribe((tip) => {
      expect(tip).toBe(10);
      done();
    });
  });

  it('all variables should be reset to initial state on calling resetAll', (done) => {
    service.resetAll();

    combineLatest([
      service.tipValue,
      service.totalValue,
      service.nopValue,
      service.resetUi$
    ]).pipe(take(1)).subscribe(([tipVal, totVal, nop, reset]) => {
      expect(tipVal).toBe(0);
      expect(totVal).toBe(0);
      expect(nop).toBe(1);
      expect(reset).toBeTrue();
      done();
    });
  });
});
