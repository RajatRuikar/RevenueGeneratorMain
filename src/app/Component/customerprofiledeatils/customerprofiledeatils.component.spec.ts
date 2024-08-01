import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprofiledeatilsComponent } from './customerprofiledeatils.component';

describe('CustomerprofiledeatilsComponent', () => {
  let component: CustomerprofiledeatilsComponent;
  let fixture: ComponentFixture<CustomerprofiledeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerprofiledeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerprofiledeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
