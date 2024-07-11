import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminDetailsComponent } from './update-admin-details.component';

describe('UpdateAdminDetailsComponent', () => {
  let component: UpdateAdminDetailsComponent;
  let fixture: ComponentFixture<UpdateAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAdminDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
