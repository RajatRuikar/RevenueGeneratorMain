import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeproductmanupulataionComponent } from './employeeproductmanupulataion.component';

describe('EmployeeproductmanupulataionComponent', () => {
  let component: EmployeeproductmanupulataionComponent;
  let fixture: ComponentFixture<EmployeeproductmanupulataionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeproductmanupulataionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeproductmanupulataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
