import { Component, Input } from '@angular/core';
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
   * to store value of the input field
   */
  public inputValue: number;

  constructor(private _tipService: TipServiceService) {
    this.inputValue = 0;
  }

  /**
   * Sets the input value and updates the total in the service
   *
   * @param inputElement
   */
  public onKeyDown(inputElement: any): void{
    this.inputValue = inputElement.value;
    this._tipService.updateTotal(this.inputValue);
  }

}
