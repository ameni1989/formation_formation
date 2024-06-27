import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyermsgComponent } from './envoyermsg.component';

describe('EnvoyermsgComponent', () => {
  let component: EnvoyermsgComponent;
  let fixture: ComponentFixture<EnvoyermsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyermsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoyermsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
