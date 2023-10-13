import { TestBed } from '@angular/core/testing';

import { ResrapiService } from './resrapi.service';

describe('ResrapiService', () => {
  let service: ResrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
