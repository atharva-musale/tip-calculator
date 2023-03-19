import {
  ReplaySubject,
} from "rxjs";

/**
 * Fixture for tip buttons service
 */
export class TipButtonsServiceFixture implements Readonly<TipButtonsServiceFixture> {
  public selectedButton$: ReplaySubject<number>;

  public selectButton: jasmine.Spy;

  constructor() {
    this.selectedButton$ = new ReplaySubject<number>(1);

    this.selectButton = jasmine.createSpy('selectButton').and.callThrough();
  }
}
