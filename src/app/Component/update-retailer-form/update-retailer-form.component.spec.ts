import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRetailerFormComponent } from './update-retailer-form.component';

describe('UpdateRetailerFormComponent', () => {
  let component: UpdateRetailerFormComponent;
  let fixture: ComponentFixture<UpdateRetailerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRetailerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRetailerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
