import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOME1Component } from './home1.component';

describe('HOME1Component', () => {
  let component: HOME1Component;
  let fixture: ComponentFixture<HOME1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOME1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HOME1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
