import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecustomerdetailsComponent } from './employeecustomerdetails.component';

describe('EmployeecustomerdetailsComponent', () => {
  let component: EmployeecustomerdetailsComponent;
  let fixture: ComponentFixture<EmployeecustomerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeecustomerdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
