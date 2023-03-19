import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BillInputComponent } from './components/bill-input/bill-input.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { NopInputComponent } from './components/nop-input/nop-input.component';
import { CustomTipComponent, TipButtonComponent } from './components/tip-buttons-group/sub-components';
import { TipButtonsGroupComponent } from './components/tip-buttons-group/tip-buttons-group.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        BillInputComponent,
        TipButtonsGroupComponent,
        NopInputComponent,
        DisplayCardComponent,
        TipButtonComponent,
        CustomTipComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
