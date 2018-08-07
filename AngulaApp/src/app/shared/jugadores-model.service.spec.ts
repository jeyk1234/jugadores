import { TestBed, inject } from '@angular/core/testing';

import { JugadoresModelService } from './jugadores-model.service';

describe('JugadoresModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadoresModelService]
    });
  });

  it('should be created', inject([JugadoresModelService], (service: JugadoresModelService) => {
    expect(service).toBeTruthy();
  }));
});
