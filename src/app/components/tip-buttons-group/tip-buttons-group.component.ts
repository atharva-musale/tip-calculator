import { Component } from "@angular/core";

@Component({
  selector: 'app-tip-buttons-group',
  templateUrl: './tip-buttons-group.component.html',
  styleUrls: ['./tip-buttons-group.component.css']
})
export class TipButtonsGroupComponent {

  constructor(){}

  /**
   * Resets the button state for the list of buttons passed
   *
   * @param buttons list of buttons to be toggled
   */
  public toggle(buttons: any[]) {
    console.log(buttons);
    buttons.forEach((btn) => {
      btn.resetButtonState();
    });
  }
}
