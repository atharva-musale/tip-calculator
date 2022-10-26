import {
  Component,
} from '@angular/core';
import {
  TipServiceService,
} from 'src/app/services/tip-service/tip-service.service';

@Component({
  selector: 'app-custom-tip',
  templateUrl: './custom-tip.component.html',
  styleUrls: ['./custom-tip.component.css']
})
export class CustomTipComponent {
  /**
   * Value in the input
   */
  public customTipPercent = 0;

  constructor(private _tipService: TipServiceService) { }

  /**
   * OnBlur event handler
   *
   * @param inputElement to get the value of the custom input
   */
  public setCustomTip(inputElement: HTMLInputElement) {
    console.log("Custom tip value: ", inputElement.value);
    this.customTipPercent = Number(inputElement.value);
    this._tipService.updatePercentTip(this.customTipPercent);
  }
}
