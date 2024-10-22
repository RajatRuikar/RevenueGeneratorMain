import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRetailerComponent } from './add-retailer.component';

describe('AddRetailerComponent', () => {
  let component: AddRetailerComponent;
  let fixture: ComponentFixture<AddRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
