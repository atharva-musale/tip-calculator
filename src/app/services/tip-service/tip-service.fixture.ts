import {
  ReplaySubject,
} from 'rxjs';

/**
 * Fixture for services configuration service
 */
export class TipServiceFixture implements Readonly<TipServiceFixture> {
  public resetUi$: ReplaySubject<boolean>;
  public totalValue: ReplaySubject<number>;
  public nopValue: ReplaySubject<number>;
  public tipValue: ReplaySubject<number>;

  public updateTotal: jasmine.Spy;
  public updateNumberOfPeople: jasmine.Spy;
  public updatePercentTip: jasmine.Spy;
  public resetAll: jasmine.Spy;

  constructor() {
    this.resetUi$ = new ReplaySubject<boolean>(1);
    this.totalValue = new ReplaySubject<number>(1);
    this.nopValue = new ReplaySubject<number>(1);
    this.tipValue = new ReplaySubject<number>(1);

    this.updateTotal = jasmine.createSpy('updateTotal').and.callThrough();
    this.updateNumberOfPeople = jasmine.createSpy('updateNumberOfPeople').and.callThrough();
    this.updatePercentTip = jasmine.createSpy('updatePercentTip').and.callThrough();
    this.resetAll = jasmine.createSpy('resetAll').and.callThrough();
  }
}
