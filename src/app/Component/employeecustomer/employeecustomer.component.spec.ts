import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecustomerComponent } from './employeecustomer.component';

describe('EmployeecustomerComponent', () => {
  let component: EmployeecustomerComponent;
  let fixture: ComponentFixture<EmployeecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeecustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
