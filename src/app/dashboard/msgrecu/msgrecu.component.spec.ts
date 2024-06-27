import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgrecuComponent } from './msgrecu.component';

describe('MsgrecuComponent', () => {
  let component: MsgrecuComponent;
  let fixture: ComponentFixture<MsgrecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgrecuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgrecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
