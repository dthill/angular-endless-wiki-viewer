import { TestBed } from '@angular/core/testing';

import { GetArticleService } from './get-article.service';

describe('GetArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetArticleService = TestBed.get(GetArticleService);
    expect(service).toBeTruthy();
  });
});
