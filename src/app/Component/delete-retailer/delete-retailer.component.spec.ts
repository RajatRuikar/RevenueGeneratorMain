import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRetailerComponent } from './delete-retailer.component';

describe('DeleteRetailerComponent', () => {
  let component: DeleteRetailerComponent;
  let fixture: ComponentFixture<DeleteRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
