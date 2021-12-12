import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  public tipPerPerson: number = 0;
  public totalPerPerson: number = 0;


  public total: number = 0;
  public nop: number = 1;
  public percentTip: number = 0;

  constructor(private _tipService: TipServiceService) { }

  ngOnInit(): void {
    this._tipService.totalValue.subscribe((val: any)=>{
      this.total = val;
      this.calculateTotalPerPerson();
      this.calculateTipPerPerson();
    });

    this._tipService.nopValue.subscribe((val: any)=>{
      this.nop = val;
      this.calculateTotalPerPerson();
      this.calculateTipPerPerson();
    });

    this._tipService.tipValue.subscribe((val: number)=>{
      this.percentTip = val;
      this.calculateTotalPerPerson();
      this.calculateTipPerPerson();
    });
  }

  calculateTotalPerPerson(){
    this.totalPerPerson = (this.total/this.nop);
  }

  calculateTipPerPerson(){
    let tipTemp = this.percentTip / 100;
    tipTemp = this.total * tipTemp;
    this.tipPerPerson = tipTemp / this.nop;
  }
}
