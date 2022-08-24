import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditOrderComponentComponent } from './page-edit-order-component.component';

describe('PageEditOrderComponentComponent', () => {
  let component: PageEditOrderComponentComponent;
  let fixture: ComponentFixture<PageEditOrderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditOrderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
