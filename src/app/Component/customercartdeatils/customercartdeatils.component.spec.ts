import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercartdeatilsComponent } from './customercartdeatils.component';

describe('CustomercartdeatilsComponent', () => {
  let component: CustomercartdeatilsComponent;
  let fixture: ComponentFixture<CustomercartdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomercartdeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomercartdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
