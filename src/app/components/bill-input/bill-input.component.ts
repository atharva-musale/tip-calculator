import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent implements OnInit {

  @Input() path!: string;

  public inputValue: number;

  constructor(private _tipService: TipServiceService) {
    this.inputValue = 0;
  }

  ngOnInit(): void {
  }

  onKeyDown(inputElement: any): void{
    this.inputValue = inputElement.value;
    this._tipService.updateTotal(this.inputValue);
  }

}
