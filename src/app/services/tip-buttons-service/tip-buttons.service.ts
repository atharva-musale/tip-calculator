import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipButtonsService {
  /**
   * Emits the index of button that has been selected
   */
  private selectedButtonSubject$ = new BehaviorSubject<number>(0);
  public selectedButton$ = this.selectedButtonSubject$.asObservable();

  constructor() { }

  public selectButton(selectedButton: number) {
    this.selectedButtonSubject$.next(selectedButton);
  }
}
