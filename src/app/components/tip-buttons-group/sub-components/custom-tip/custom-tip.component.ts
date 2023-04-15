import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  TipButtonsService,
  TipService,
} from 'src/app/services/index';

@Component({
  selector: 'app-custom-tip',
  templateUrl: './custom-tip.component.html',
  styleUrls: ['./custom-tip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTipComponent {
  /**
   * Index of the button
   */
  @Input()
  public index = 6;

  /**
   * Value in the input
   */
  public customTipPercent = 0;

  constructor(private tipService: TipService, private tipButtonsService: TipButtonsService) { }

  /**
   * OnBlur event handler
   *
   * @param inputElement to get the value of the custom input
   */
  public setCustomTip(inputElement: HTMLInputElement) {
    this.customTipPercent = Number(inputElement.value);
    this.tipService.updatePercentTip(this.customTipPercent);
    this.tipButtonsService.clickButton(this.index);
  }
}
