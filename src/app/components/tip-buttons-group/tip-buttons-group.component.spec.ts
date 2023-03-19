import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomTipComponent, TipButtonComponent } from './sub-components';
import { TipButtonsGroupComponent } from './tip-buttons-group.component';

describe('TipButtonsGroupComponent', () => {
  let component: TipButtonsGroupComponent;
  let fixture: ComponentFixture<TipButtonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipButtonsGroupComponent, TipButtonComponent, CustomTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
