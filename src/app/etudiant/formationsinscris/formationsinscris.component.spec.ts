import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsinscrisComponent } from './formationsinscris.component';

describe('FormationsinscrisComponent', () => {
  let component: FormationsinscrisComponent;
  let fixture: ComponentFixture<FormationsinscrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsinscrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsinscrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
