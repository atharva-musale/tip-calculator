import {
  ReplaySubject,
} from "rxjs";

/**
 * Fixture for tip buttons service
 */
export class TipButtonsServiceFixture implements Readonly<TipButtonsServiceFixture> {
  public selectedButton$: ReplaySubject<number>;

  public clickButton: jasmine.Spy;
  public resetButtons: jasmine.Spy;

  constructor() {
    this.selectedButton$ = new ReplaySubject<number>(1);

    this.clickButton = jasmine.createSpy('clickButton').and.callThrough();
    this.resetButtons = jasmine.createSpy('resetButtons').and.callThrough();
  }
}
