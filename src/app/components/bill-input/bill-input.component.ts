import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  /**
   * path of the icon to be displayed in the input
   */
  @Input() path!: string;

  /**
   * to store form group for bill
   */
  public billInputForm: FormGroup;

  constructor(private _tipService: TipServiceService, private formBuilder: FormBuilder) {
    this.billInputForm = this.formBuilder.group({
      billAmount: [0, Validators.required]
    });
  }

  /**
   * Updates the total in the service
   */
  public onKeyDown() {
    this._tipService.updateTotal(this.billInputForm.value.billAmount);
  }

}
