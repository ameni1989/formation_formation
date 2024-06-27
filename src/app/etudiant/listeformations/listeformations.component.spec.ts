import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeformationsComponent } from './listeformations.component';

describe('ListeformationsComponent', () => {
  let component: ListeformationsComponent;
  let fixture: ComponentFixture<ListeformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
