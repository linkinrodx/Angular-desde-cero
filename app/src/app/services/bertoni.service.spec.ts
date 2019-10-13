import { TestBed } from '@angular/core/testing';

import { BertoniService } from './bertoni.service';

describe('BertoniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BertoniService = TestBed.get(BertoniService);
    expect(service).toBeTruthy();
  });
});
