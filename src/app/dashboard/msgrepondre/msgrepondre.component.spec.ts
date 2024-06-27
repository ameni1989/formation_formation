import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgrepondreComponent } from './msgrepondre.component';

describe('MsgrepondreComponent', () => {
  let component: MsgrepondreComponent;
  let fixture: ComponentFixture<MsgrepondreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgrepondreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgrepondreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
