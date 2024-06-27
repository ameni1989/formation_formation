import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeinscripComponent } from './listeinscrip.component';

describe('ListeinscripComponent', () => {
  let component: ListeinscripComponent;
  let fixture: ComponentFixture<ListeinscripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeinscripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeinscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
