import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRetailerComponent } from './get-all-retailer.component';

describe('GetAllRetailerComponent', () => {
  let component: GetAllRetailerComponent;
  let fixture: ComponentFixture<GetAllRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
