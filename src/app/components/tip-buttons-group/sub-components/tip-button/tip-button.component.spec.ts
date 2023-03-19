import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  TipButtonsService,
  TipServiceService,
} from 'src/app/services';
import {
  TipButtonsServiceFixture,
  TipServiceFixture,
} from 'src/app/services/fixtures';
import {
  TipButtonComponent,
} from './tip-button.component';

describe('TipButtonComponent', () => {
  let component: TipButtonComponent;
  let fixture: ComponentFixture<TipButtonComponent>;
  let tipServiceFixture: TipServiceFixture;
  let tipButtonServiceFixture: TipButtonsServiceFixture;

  tipServiceFixture = new TipServiceFixture();
  tipButtonServiceFixture = new TipButtonsServiceFixture();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipButtonComponent ],
      providers:[
        { provide: TipServiceService, useValue: tipServiceFixture },
        { provide: TipButtonsService, useValue: tipButtonServiceFixture }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resetButtonState should reset the state to initial state', () => {
    component.resetButtonState();

    expect(component.currentState).toBe(component.initialState);
  });

  it('onclick should reset button if the current state is active', () => {
    component.currentState = 'active';
    spyOn(component, 'resetButtonState').and.callThrough();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(component.resetButtonState).toHaveBeenCalled();
    expect(tipServiceFixture.updatePercentTip).toHaveBeenCalledWith(0);
  });

  it('onclick should set state to active if current state is not active', () => {
    component.currentState = 'normal';
    let button = fixture.debugElement.nativeElement.querySelector('button');
    component.value = '5';
    button.click();

    expect(component.currentState).toBe('active');
    expect(tipButtonServiceFixture.selectButton).toHaveBeenCalledWith(0);
    expect(tipServiceFixture.updatePercentTip).toHaveBeenCalledWith(5);
  });
});
