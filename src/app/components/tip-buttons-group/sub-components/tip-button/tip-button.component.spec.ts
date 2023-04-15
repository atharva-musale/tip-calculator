import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  TipButtonsService,
  TipService,
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
        { provide: TipService, useValue: tipServiceFixture },
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

  it('should call clickButton with the index on click', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    component.value = '5';
    button.click();

    expect(tipButtonServiceFixture.clickButton).toHaveBeenCalledWith(0);
  });

  it('should update tip value when selected', () => {
    component.index = 1;
    component.value = '5';
    tipButtonServiceFixture.selectedButton$.next(1);

    expect(tipServiceFixture.updatePercentTip).toHaveBeenCalledWith(5);
  });
});
