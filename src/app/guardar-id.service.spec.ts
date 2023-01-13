import { TestBed } from '@angular/core/testing';

import { GuardarIdService } from './guardar-id.service';

describe('GuardarIdService', () => {
  let service: GuardarIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
