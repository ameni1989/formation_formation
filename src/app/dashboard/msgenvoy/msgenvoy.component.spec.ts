import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgenvoyComponent } from './msgenvoy.component';

describe('MsgenvoyComponent', () => {
  let component: MsgenvoyComponent;
  let fixture: ComponentFixture<MsgenvoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgenvoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgenvoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
