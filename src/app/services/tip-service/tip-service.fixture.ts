import {
  ReplaySubject,
} from 'rxjs';

/**
 * Fixture for services configuration service
 */
export class TipServiceFixture implements Readonly<TipServiceFixture> {
  public totalValue: ReplaySubject<number>;
  public nopValue: ReplaySubject<number>;
  public tipValue: ReplaySubject<number>;
  public resetUi$: ReplaySubject<number>;

  public updateTotal: jasmine.Spy;
  public updateNumberOfPeople: jasmine.Spy;
  public updatePercentTip: jasmine.Spy;
  public resetAll: jasmine.Spy;

  constructor() {
    this.totalValue = new ReplaySubject<number>(0);
    this.nopValue = new ReplaySubject<number>(1);
    this.tipValue = new ReplaySubject<number>(0);
    this.resetUi$ = new ReplaySubject<number>(0);

    this.updateTotal = jasmine.createSpy('updateTotal').and.callThrough();
    this.updateNumberOfPeople = jasmine.createSpy('updateNumberOfPeople').and.callThrough();
    this.updatePercentTip = jasmine.createSpy('updatePercentTip').and.callThrough();
    this.resetAll = jasmine.createSpy('resetAll').and.callThrough();
  }
}