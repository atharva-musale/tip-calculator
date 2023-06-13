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
  TipService,
} from 'src/app/services/tip-service/tip-service.service';

@Component({
  selector: 'app-nop-input',
  templateUrl: './nop-input.component.html',
  styleUrls: ['./nop-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NopInputComponent {
  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  /**
   * Path of the icon to be displayed in the input
   */
  @Input()
  public path = '';

  /**
   * Form control for the nop-input form
   */
  public numberOfPeopleInputForm: FormGroup;

  constructor(private tipService: TipService, private formBuilder: FormBuilder,) {
    this.numberOfPeopleInputForm = this.formBuilder.group({
      numberOfPeople: [Validators.required]
    });
  }

  public ngOnInit() {
    this.subscriptions.push(
      this.tipService.resetUi$.pipe(filter(reset => reset)).subscribe(() => this.numberOfPeopleInputForm.reset())
    );
  }

  /**
   * Updates the number of people in service
   */
  public onKeyUp() {
    this.tipService.updateNumberOfPeople(this.numberOfPeopleInputForm.value.numberOfPeople);
  }

  public ngOnDestroy() {
    /** Unsubscribes all the subscriptions */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
