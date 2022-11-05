import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Subscription,
} from 'rxjs';
import {
  TipButtonsService,
  TipServiceService,
} from 'src/app/services/index';

@Component({
  selector: 'app-tip-button',
  templateUrl: './tip-button.component.html',
  styleUrls: ['./tip-button.component.css']
})
export class TipButtonComponent implements OnInit, OnDestroy {
  /**
   * Index of the button
   */
  @Input()
  public index = 0;

  /**
   * Value to be displayed inside button
   */
  @Input()
  public value = '';

  /**
   * Initial state of the button
   */
  public initialState = 'normal';

  /**
   * To keep track of the current state
   */
  public currentState = '';

  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  constructor(private _tipService: TipServiceService, private tipButtonsService: TipButtonsService) {
    this.resetButtonState();
  }

  public ngOnInit() {
    this.subscriptions.push(
      this._tipService.resetUi$.subscribe((resetButton) => {
        if(resetButton) {
          this.resetButtonState();
        }
      }),
      this.tipButtonsService.selectedButton$.subscribe((selectedIndex) => {
        if (selectedIndex !== this.index) {
          this.resetButtonState();
        }
      })
    );
  }

  /**
   * OnClick event handler for the button
   */
  public onClick() {
    if (this.currentState != 'active'){
      this.currentState = 'active';
      this._tipService.updatePercentTip(+this.value);
      this.tipButtonsService.selectButton(this.index);
    }
    else {
      this.resetButtonState();
      this._tipService.updatePercentTip(0);
    }
  }

  /**
   * Reset state
   */
  public resetButtonState() {
    this.currentState = this.initialState;
  }

  /** Unsubscribes all the subscriptions */
  public ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
