import {
  Injectable,
} from '@angular/core';
import {
  BehaviorSubject,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipServiceService {
  /**
   * Total amount
   */
  private total = new BehaviorSubject<number>(0);
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

  /**
   * Subject to reset the form
   */
  private resetUi = new BehaviorSubject<boolean>(false);
  public resetUi$ = this.resetUi.asObservable();

  constructor() {}

  /**
   * Updates the total amount
   *
   * @param tot
   */
  public updateTotal(tot: number){
    this.total.next(tot);
  }

  /**
   * Updates the number of people
   *
   * @param nop
   */
  public updateNumberOfPeople(nop: number){
    this.numberOfPeople.next(nop);
  }

  /**
   * Updates the tip percent
   *
   * @param tip
   */
  public updatePercentTip(tip: number){
    this.tip.next(tip);
  }

  /**
   * Resets everything to initial state
   */
  public resetAll() {
    this.total.next(0);
    this.numberOfPeople.next(1);
    this.tip.next(0);

    this.resetUi.next(true);
  }

}
