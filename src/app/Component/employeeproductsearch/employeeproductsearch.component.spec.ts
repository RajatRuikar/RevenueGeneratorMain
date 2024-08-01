import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeproductsearchComponent } from './employeeproductsearch.component';

describe('EmployeeproductsearchComponent', () => {
  let component: EmployeeproductsearchComponent;
  let fixture: ComponentFixture<EmployeeproductsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeproductsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeproductsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
