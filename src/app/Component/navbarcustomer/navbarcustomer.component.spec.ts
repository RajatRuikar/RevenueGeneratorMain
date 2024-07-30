import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcustomerComponent } from './navbarcustomer.component';

describe('NavbarcustomerComponent', () => {
  let component: NavbarcustomerComponent;
  let fixture: ComponentFixture<NavbarcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
