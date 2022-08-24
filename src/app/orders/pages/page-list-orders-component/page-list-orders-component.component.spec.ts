import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListOrdersComponentComponent } from './page-list-orders-component.component';

describe('PageListOrdersComponentComponent', () => {
  let component: PageListOrdersComponentComponent;
  let fixture: ComponentFixture<PageListOrdersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListOrdersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListOrdersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
