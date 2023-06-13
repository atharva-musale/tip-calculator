import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  combineLatest,
  Observable,
  Subscription,
} from 'rxjs';
import {
  map,
} from 'rxjs/operators';
import {
  TipService,
} from 'src/app/services/tip-service/tip-service.service';
import {
  getTotalAmountPerPerson,
  getTipPerPerson,
} from './display-card.helpers'

interface TemplateData {
  totalPerPerson: number,
  tipPerPerson: number
}

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayCardComponent implements OnInit, OnDestroy {
  /**
   * List of subscriptions
   */
  private subscriptions: Subscription[] = [];

  /**
   * Data to be displayed on template
   */
  public templateData$?: Observable<TemplateData>

  constructor(private tipService: TipService) { }

  public ngOnInit() {
    this.templateData$ = combineLatest([
      this.tipService.totalValue,
      this.tipService.nopValue,
      this.tipService.tipValue
    ]).pipe(map(([totalAmount, numberOfPeople, tipValue]) => {
      return {
        totalPerPerson: getTotalAmountPerPerson(totalAmount, numberOfPeople),
        tipPerPerson: getTipPerPerson(totalAmount, tipValue, numberOfPeople)
      };
    }));
  }

  /**
   * Resets everything
   */
  public onReset() {
    this.tipService.resetAll();
  }

  public ngOnDestroy() {
    // Destroy all subscriptions
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
