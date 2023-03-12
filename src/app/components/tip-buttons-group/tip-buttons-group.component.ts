import {
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";

@Component({
  selector: 'app-tip-buttons-group',
  templateUrl: './tip-buttons-group.component.html',
  styleUrls: ['./tip-buttons-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipButtonsGroupComponent {

  constructor() { }

}
