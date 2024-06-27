import { TestBed } from '@angular/core/testing';

import { InscripService } from './inscrip.service';

describe('InscripService', () => {
  let service: InscripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
