import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component10Component } from './component10.component';

describe('Component10Component', () => {
  let component: Component10Component;
  let fixture: ComponentFixture<Component10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
