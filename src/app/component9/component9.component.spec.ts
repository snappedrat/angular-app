import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component9Component } from './component9.component';

describe('Component9Component', () => {
  let component: Component9Component;
  let fixture: ComponentFixture<Component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
