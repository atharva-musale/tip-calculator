import { Component, Input, OnInit } from '@angular/core';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-nop-input',
  templateUrl: './nop-input.component.html',
  styleUrls: ['./nop-input.component.css']
})
export class NopInputComponent implements OnInit {

  @Input() path!: string;

  public inputValue: number;

  constructor(private _tipService: TipServiceService) {
    this.inputValue = 1;
  }

  ngOnInit(): void {

  }

  onKeyDown(inputElement: any): void{
    this.inputValue = inputElement.value;
    if(this.inputValue == 0){
      this.inputValue = 1;
    }
    this._tipService.updateNumberOfPeople(this.inputValue);
  }

}
