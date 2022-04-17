import { Component, Input } from '@angular/core';
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
   * to store value of the input field
   */
  public inputValue: number;

  constructor(private _tipService: TipServiceService) {
    this.inputValue = 1;
  }

  /**
   * Sets the input value and updates the number of people in service
   *
   * @param inputElement
   */
  public onKeyDown(inputElement: any): void{
    this.inputValue = inputElement.value;
    if(this.inputValue == 0){
      this.inputValue = 1;
    }
    this._tipService.updateNumberOfPeople(this.inputValue);
  }

}
