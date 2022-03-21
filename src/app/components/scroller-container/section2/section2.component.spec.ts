import { ComponentFixture, TestBed } from '@angular/core/testing';

import { section2Component } from './section2.component';

describe('section2Component', () => {
  let component: section2Component;
  let fixture: ComponentFixture<section2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ section2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(section2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
