import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListerComponent } from './article-lister.component';

describe('ArticleListerComponent', () => {
  let component: ArticleListerComponent;
  let fixture: ComponentFixture<ArticleListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
