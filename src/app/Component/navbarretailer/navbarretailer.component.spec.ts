import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarretailerComponent } from './navbarretailer.component';

describe('NavbarretailerComponent', () => {
  let component: NavbarretailerComponent;
  let fixture: ComponentFixture<NavbarretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarretailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
