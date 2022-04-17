import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit, OnDestroy {

  /**
   * the list of subscriptions
   */
  private subscriptions: Subscription[] = [];

  /**
   * tip amount per person
   */
  public tipPerPerson: number;

  /**
   * total to be paid per person
   */
  public totalPerPerson: number;

  /**
   * total amount tp be paid
   */
  public total: number;

  /**
   * number of people
   */
  public nop: number;

  /**
   * % tip selected by the user
   */
  public percentTip: number;

  constructor(private _tipService: TipServiceService) {
    this.tipPerPerson = 0;
    this.totalPerPerson = 0;
    this.total = 0;
    this.nop = 1;
    this.percentTip = 0;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this._tipService.totalValue.subscribe((totalAmount: any)=>{
        this.total = totalAmount;
        this.calculateTotalPerPerson();
        this.calculateTipPerPerson();
      })
    );

    this.subscriptions.push(
      this._tipService.nopValue.subscribe((val: any)=>{
        this.nop = val;
        this.calculateTotalPerPerson();
        this.calculateTipPerPerson();
      })
    );

    this.subscriptions.push(
      this._tipService.tipValue.subscribe((val: number)=>{
        this.percentTip = val;
        this.calculateTotalPerPerson();
        this.calculateTipPerPerson();
      })
    );
  }

  /**
   * Calculates amount to be paid per person
   */
  public calculateTotalPerPerson() {
    this.totalPerPerson = (this.total/this.nop);
  }

  /**
   * Calculates tip to be paid per person
   */
  public calculateTipPerPerson() {
    let tipTemp = this.percentTip / 100;
    tipTemp = this.total * tipTemp;
    this.tipPerPerson = tipTemp / this.nop;
  }

  /**
   * Resets everything
   */
  public onReset() {
    this.tipPerPerson = 0;
    this.totalPerPerson = 0;
    this.total = 0;
    this.nop = 1;
    this.percentTip = 0;

    this._tipService.resetAll();
  }

  ngOnDestroy(): void {
    // destroy all subscriptions
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
