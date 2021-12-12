import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipServiceService {

  private total: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private numberOfPeople = new BehaviorSubject<number>(1);
  private tip = new BehaviorSubject<number>(0);

  public totalValue = this.total.asObservable();
  public nopValue = this.numberOfPeople.asObservable();
  public tipValue = this.tip.asObservable();

  constructor() {
  }

  updateTotal(tot: number){
    this.total.next(tot);
  }

  updateNumberOfPeople(nop: number){
    this.numberOfPeople.next(nop);
  }

  updatePercentTip(tip: number){
    this.tip.next(tip);
  }

}
