import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerproductsComponent } from './customerproducts.component';

describe('CustomerproductsComponent', () => {
  let component: CustomerproductsComponent;
  let fixture: ComponentFixture<CustomerproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
