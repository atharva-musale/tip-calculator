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
  @Input() path = '';

  /**
   * Bill input form group
   */
  public billInputForm: FormGroup;

  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  constructor(private _tipService: TipServiceService, private formBuilder: FormBuilder) {
    this.billInputForm = this.formBuilder.group({
      billAmount: [Validators.required]
    });
  }

  public ngOnInit() {
    this.subscriptions.push(
      this._tipService.resetUi$.pipe(filter(resetUi => resetUi)).subscribe(() => this.billInputForm.reset())
    );
  }

  /**
   * Updates the total bill amount in the service
   */
  public onKeyUp() {
    this._tipService.updateTotal(this.billInputForm.value.billAmount);
  }

  /** Unsubscribes all the subscriptions */
  public ngOnDestroy() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());
  }
}
