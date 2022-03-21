import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerContainerComponent } from './scroller-container.component';

describe('ScrollerContainerComponent', () => {
  let component: ScrollerContainerComponent;
  let fixture: ComponentFixture<ScrollerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
