import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeproductComponent } from './employeeproduct.component';

describe('EmployeeproductComponent', () => {
  let component: EmployeeproductComponent;
  let fixture: ComponentFixture<EmployeeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
