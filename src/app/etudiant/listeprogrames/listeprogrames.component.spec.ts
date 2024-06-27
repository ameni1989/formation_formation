import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprogramesComponent } from './listeprogrames.component';

describe('ListeprogramesComponent', () => {
  let component: ListeprogramesComponent;
  let fixture: ComponentFixture<ListeprogramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprogramesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeprogramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
