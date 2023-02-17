import { TestBed } from '@angular/core/testing';

import { CatCrudService } from './cat-crud.service';

describe('CatCrudService', () => {
  let service: CatCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
