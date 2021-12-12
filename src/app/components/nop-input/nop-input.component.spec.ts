import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopInputComponent } from './nop-input.component';

describe('NopInputComponent', () => {
  let component: NopInputComponent;
  let fixture: ComponentFixture<NopInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopInputComponent ]
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
