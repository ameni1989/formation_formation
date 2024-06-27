import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdynComponent } from './listdyn.component';

describe('ListdynComponent', () => {
  let component: ListdynComponent;
  let fixture: ComponentFixture<ListdynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
