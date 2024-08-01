import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecustomersearchComponent } from './employeecustomersearch.component';

describe('EmployeecustomersearchComponent', () => {
  let component: EmployeecustomersearchComponent;
  let fixture: ComponentFixture<EmployeecustomersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeecustomersearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecustomersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
