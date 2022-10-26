import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillInputComponent } from './components/bill-input/bill-input.component';
import { TipButtonComponent } from './components/tip-buttons-group/sub-components/tip-button/tip-button.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { NopInputComponent } from './components/nop-input/nop-input.component';
import { CustomTipComponent } from './components/tip-buttons-group/sub-components/custom-tip/custom-tip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipButtonsGroupComponent } from './components/tip-buttons-group/tip-buttons-group.component';

@NgModule({
  declarations: [
    AppComponent,
    BillInputComponent,
    TipButtonComponent,
    DisplayCardComponent,
    NopInputComponent,
    CustomTipComponent,
    TipButtonsGroupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
