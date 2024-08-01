import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeproductdetailsComponent } from './employeeproductdetails.component';

describe('EmployeeproductdetailsComponent', () => {
  let component: EmployeeproductdetailsComponent;
  let fixture: ComponentFixture<EmployeeproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeproductdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
