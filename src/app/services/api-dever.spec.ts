import { TestBed } from '@angular/core/testing';

import { ApiDever } from './api-dever';

describe('ApiDever', () => {
  let service: ApiDever;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDever);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
