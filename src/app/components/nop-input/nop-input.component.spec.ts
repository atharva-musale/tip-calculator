import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NopInputComponent } from './nop-input.component';

describe('NopInputComponent', () => {
  let component: NopInputComponent;
  let fixture: ComponentFixture<NopInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopInputComponent ],
      imports: [FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
