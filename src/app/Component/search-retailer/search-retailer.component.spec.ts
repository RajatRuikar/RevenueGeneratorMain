import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRetailerComponent } from './search-retailer.component';

describe('SearchRetailerComponent', () => {
  let component: SearchRetailerComponent;
  let fixture: ComponentFixture<SearchRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
