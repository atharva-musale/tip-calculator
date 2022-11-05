import {
  Component,
  Input,
} from '@angular/core';
import {
  TipButtonsService,
  TipServiceService,
} from 'src/app/services/index';

@Component({
  selector: 'app-custom-tip',
  templateUrl: './custom-tip.component.html',
  styleUrls: ['./custom-tip.component.css']
})
export class CustomTipComponent {
  /**
   * Index of the button
   */
  @Input()
  public index = 0;

  /**
   * Value in the input
   */
  public customTipPercent = 0;

  constructor(private _tipService: TipServiceService, private tipButtonsService: TipButtonsService) { }

  /**
   * OnBlur event handler
   *
   * @param inputElement to get the value of the custom input
   */
  public setCustomTip(inputElement: HTMLInputElement) {
    console.log("Custom tip value: ", inputElement.value);
    this.customTipPercent = Number(inputElement.value);
    this._tipService.updatePercentTip(this.customTipPercent);
    this.tipButtonsService.selectButton(this.index);
  }
}
