import {
  Injectable,
  OnDestroy,
} from '@angular/core';
import {
  BehaviorSubject,
  Subscription,
} from 'rxjs';
import {
  TipService,
} from '../tip-service/tip-service.service';

@Injectable({
  providedIn: 'root'
})
export class TipButtonsService implements OnDestroy {
  /**
   * Emits the index of button that has been selected
   */
  private selectedButtonSubject$ = new BehaviorSubject<number>(0);
  public selectedButton$ = this.selectedButtonSubject$.asObservable();

  // List of subscriptions
  private subscriptions: Subscription[] = [];

  constructor(tipService: TipService) {
    this.subscriptions.push(
      tipService.resetUi$.subscribe(() => this.resetButtons())
    );
  }

  /**
   * Emits index of the selected button
   *
   * @param buttonIndex index of the selected button
   */
  public clickButton(buttonIndex: number) {
    /**
     * We want to toggle the state of a button if clicked twice.
     * So if clicked twice, reset the state of all buttons
     */
    if (buttonIndex === this.selectedButtonSubject$.getValue()) {
      this.selectedButtonSubject$.next(0);
    } else {
      this.selectedButtonSubject$.next(buttonIndex);
    }
  }

  /**
   * Resets the state of all buttons
   */
  public resetButtons() {
    this.selectedButtonSubject$.next(0);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
