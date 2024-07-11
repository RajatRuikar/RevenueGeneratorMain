import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRetailerComponent } from './update-retailer.component';

describe('UpdateRetailerComponent', () => {
  let component: UpdateRetailerComponent;
  let fixture: ComponentFixture<UpdateRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
