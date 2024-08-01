import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaremployeeComponent } from './navbaremployee.component';

describe('NavbaremployeeComponent', () => {
  let component: NavbaremployeeComponent;
  let fixture: ComponentFixture<NavbaremployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbaremployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaremployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
