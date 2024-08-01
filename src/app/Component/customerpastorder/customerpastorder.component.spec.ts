import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpastorderComponent } from './customerpastorder.component';

describe('CustomerpastorderComponent', () => {
  let component: CustomerpastorderComponent;
  let fixture: ComponentFixture<CustomerpastorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerpastorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerpastorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
