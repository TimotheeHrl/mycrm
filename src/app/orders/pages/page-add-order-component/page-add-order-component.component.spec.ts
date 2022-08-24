import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrderComponentComponent } from './page-add-order-component.component';

describe('PageAddOrderComponentComponent', () => {
  let component: PageAddOrderComponentComponent;
  let fixture: ComponentFixture<PageAddOrderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddOrderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
