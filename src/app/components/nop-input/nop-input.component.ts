import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-nop-input',
  templateUrl: './nop-input.component.html',
  styleUrls: ['./nop-input.component.css']
})
export class NopInputComponent {
  /**
   * path of the icon to be displayed in the input
   */
  @Input() path!: string;

  /**
   * form-control for the nop-input form
   */
  public numberOfPeopleInputForm: FormGroup;

  constructor(private _tipService: TipServiceService, private _formBuilder: FormBuilder,) {
    this.numberOfPeopleInputForm = this._formBuilder.group({
      numberOfPeople: [1, Validators.required]
    });
  }

  /**
   * Updates the number of people in service
   */
  public onKeyDown() {
    this._tipService.updateNumberOfPeople(this.numberOfPeopleInputForm.value.numberOfPeople);
  }

}
