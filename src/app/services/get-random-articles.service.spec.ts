import { TestBed } from '@angular/core/testing';

import { GetRandomArticlesService } from './get-random-articles.service';

describe('GetRandomArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRandomArticlesService = TestBed.get(GetRandomArticlesService);
    expect(service).toBeTruthy();
  });
});
