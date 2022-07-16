import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Title of the app
   */
  title = 'tip-calculator';

  /**
   * Resets the button state for the list of buttons passed
   *
   * @param buttons list of buttons to be toggled
   */
  public toggle(buttons: any[]) {
    console.log(buttons);
    buttons.forEach( (btn) => {
      btn.resetButtonState();
    });
  }
}
