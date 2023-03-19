import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Subscription,
} from 'rxjs';
import {
  debounce,
  debounceTime,
  filter,
} from 'rxjs/operators';
import {
  TipServiceService,
} from 'src/app/services/tip-service/tip-service.service';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillInputComponent {
  /**
   * Path of the icon to be displayed in the input
   */
  @Input()
  public path = '';

  /**
   * Bill input form group
   */
  public billInputForm: FormGroup;

  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  constructor(private tipService: TipServiceService, private formBuilder: FormBuilder) {
    this.billInputForm = this.formBuilder.group({
      billAmount: [Validators.required]
    });
  }

  public ngOnInit() {
    this.subscriptions.push(
      this.tipService.resetUi$.pipe(filter(resetUi => resetUi)).subscribe(() => this.billInputForm.reset()),

      this.billInputForm.valueChanges.pipe(debounceTime(400)).subscribe((formValue) => {
        this.updateTotalBillAmount(formValue.billAmount);
      })
    );
  }

  /**
   * Updates the total bill amount in the service
   *
   * @param billAmount total bill amount
   */
  private updateTotalBillAmount(billAmount: number) {
    this.tipService.updateTotal(billAmount);
  }

  /** Unsubscribes all the subscriptions */
  public ngOnDestroy() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());
  }
}
