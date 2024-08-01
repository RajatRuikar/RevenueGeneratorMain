import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecustomermanupualtaionComponent } from './employeecustomermanupualtaion.component';

describe('EmployeecustomermanupualtaionComponent', () => {
  let component: EmployeecustomermanupualtaionComponent;
  let fixture: ComponentFixture<EmployeecustomermanupualtaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeecustomermanupualtaionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecustomermanupualtaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
