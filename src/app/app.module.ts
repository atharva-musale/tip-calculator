import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillInputComponent } from './components/bill-input/bill-input.component';
import { TipButtonComponent } from './components/tip-button/tip-button.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { NopInputComponent } from './components/nop-input/nop-input.component';
import { CustomTipComponent } from './components/custom-tip/custom-tip.component';

@NgModule({
  declarations: [
    AppComponent,
    BillInputComponent,
    TipButtonComponent,
    DisplayCardComponent,
    NopInputComponent,
    CustomTipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
