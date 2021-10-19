import { TestBed } from '@angular/core/testing';

import { HttpPostGetDeleteService } from './http-post-get-delete.service';

describe('HttpPostGetDeleteService', () => {
  let service: HttpPostGetDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPostGetDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
