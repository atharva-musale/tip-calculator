import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Observable,
  Subscription,
} from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import {
  ButtonStateEnum,
} from 'src/app/models';
import {
  TipButtonsService,
  TipService,
} from 'src/app/services/index';

@Component({
  selector: 'app-tip-button',
  templateUrl: './tip-button.component.html',
  styleUrls: ['./tip-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  public initialState = ButtonStateEnum.normal;

  /**
   * True if the button is selected
   */
  public isSelected$: Observable<boolean>;

  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  constructor(private tipService: TipService, private tipButtonsService: TipButtonsService) {
    this.isSelected$ = this.tipButtonsService.selectedButton$.pipe(map(selectedIndex => selectedIndex === this.index));
  }

  public ngOnInit() {
    this.subscriptions.push(
      this.isSelected$.pipe(
        filter(isSelected => isSelected),
        distinctUntilChanged()
      ).subscribe(() => this.tipService.updatePercentTip(+this.value))
    );
  }

  /**
   * OnClick event handler for the button
   */
  public onClick() {
    this.tipButtonsService.clickButton(this.index);
  }

  public ngOnDestroy() {
    /** Unsubscribes all the subscriptions */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
