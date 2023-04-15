import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  TipService,
} from 'src/app/services';
import {
  TipServiceFixture,
} from 'src/app/services/fixtures';
import {
  BillInputComponent,
} from './bill-input.component';

describe('BillInputComponent', () => {
  let component: BillInputComponent;
  let fixture: ComponentFixture<BillInputComponent>;
  let mockTipService = new TipServiceFixture();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillInputComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers:[{ provide: TipService, useValue: mockTipService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the form if resetUi$ emits true', () => {
    spyOn(component.billInputForm, 'reset').and.callThrough();
    mockTipService.resetUi$.next(true);

    expect(component.billInputForm.reset).toHaveBeenCalled();
  });

  it('should call updateTotal on input change', fakeAsync(() => {
    component.billInputForm.setValue({ billAmount: '500' });
    tick(500);

    expect(mockTipService.updateTotal).toHaveBeenCalledWith('500');
  }));
});
