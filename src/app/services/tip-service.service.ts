import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipServiceService {
  /**
   * Total amount
   */
  private total: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalValue = this.total.asObservable();

  /**
   * Number of people to split amongst
   */
  private numberOfPeople = new BehaviorSubject<number>(1);
  public nopValue = this.numberOfPeople.asObservable();

  /**
   * Tip amount
   */
  private tip = new BehaviorSubject<number>(0);
  public tipValue = this.tip.asObservable();

  constructor() {
  }

  /**
   * Updates the total and sends the new value to the subscribers
   *
   * @param tot
   */
  public updateTotal(tot: number){
    this.total.next(tot);
  }

  /**
   * Updates the number of people and sends the new value to the subscribers
   *
   * @param nop
   */
  public updateNumberOfPeople(nop: number){
    this.numberOfPeople.next(nop);
  }

  /**
   * Updates the % tip and sends the new value to the subscribers
   *
   * @param tip
   */
  public updatePercentTip(tip: number){
    this.tip.next(tip);
  }

  /**
   * resets everything
   */
  public resetAll() {
    this.total.next(0);
    this.numberOfPeople.next(1);
    this.tip.next(0);
  }

}
