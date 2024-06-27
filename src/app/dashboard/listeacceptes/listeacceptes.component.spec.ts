import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeacceptesComponent } from './listeacceptes.component';

describe('ListeacceptesComponent', () => {
  let component: ListeacceptesComponent;
  let fixture: ComponentFixture<ListeacceptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeacceptesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeacceptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
