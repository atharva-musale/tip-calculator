import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-tip-button',
  templateUrl: './tip-button.component.html',
  styleUrls: ['./tip-button.component.css']
})
export class TipButtonComponent implements OnInit, OnDestroy {
  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  /**
   * Value to be displayed inside button
   */
  @Input() value!: string;

  /**
   * Initial state of the button
   */
  public type: string = 'normal';

  /**
   * To keep track of the current state
   */
  public currentType: string;

  constructor(private _tipService: TipServiceService) {
    this.currentType = this.type;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this._tipService.resetUi$.subscribe((resetButton) => {
        if(resetButton) {
          this.resetButtonState();
        }
      })
    );
  }

  /**
   * OnClick event handler for the button
   */
  public setActive() {
    if (this.currentType != 'active'){
      this.currentType = 'active';
      this._tipService.updatePercentTip(+this.value);
    }
    else{
      this.currentType = this.type;
      this._tipService.updatePercentTip(0);
    }
  }

  /**
   * Reset state
   */
  public resetButtonState() {
    this.currentType = this.type;
  }

  /** Unsubscribes all the subscriptions */
  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => { subscription.unsubscribe(); });
  }
}
