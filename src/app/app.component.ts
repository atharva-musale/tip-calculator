import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tip-calculator';

  public toggle(buttons: any[]):void{
    buttons.forEach((btn)=>{
      btn.currentType = 'normal';
    });
  }

}
