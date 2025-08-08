import { TestBed } from '@angular/core/testing';

import { Autentica } from './autentica';

describe('Autentica', () => {
  let service: Autentica;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autentica);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
