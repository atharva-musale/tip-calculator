import {
  TestBed,
} from '@angular/core/testing';
import {
  take,
} from 'rxjs/operators';
import {
  TipButtonsService,
} from './tip-buttons.service';
import {
  TipServiceFixture,
} from '../fixtures';
import {
  TipService,
} from '../tip-service/tip-service.service';

describe('TipButtonsService', () => {
  let service: TipButtonsService;
  const mockTipService = new TipServiceFixture();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: TipService, useValue: mockTipService}]
    });
    service = TestBed.inject(TipButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call resetButtons if resetUi$ emits a new value', () => {
    spyOn(service, 'resetButtons').and.callThrough();
    mockTipService.resetUi$.next(true);

    expect(service.resetButtons).toHaveBeenCalled();
  })

  it('selectButton should emit index of the new button selected', (done) => {
    service.clickButton(3);

    service.selectedButton$.pipe(take(1)).subscribe((index) => {
      expect(index).toBe(3);
      done();
    });
  });

  it('selectButton should emit 0 if same button is clicked twice', (done) => {
    service.clickButton(3);
    service.clickButton(3);

    service.selectedButton$.pipe(take(2)).subscribe((index) => {
      expect(index).toBe(0);
      done();
    });
  });
});
