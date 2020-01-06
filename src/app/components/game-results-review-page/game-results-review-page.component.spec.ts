import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultsReviewPageComponent } from './game-results-review-page.component';

describe('GameResultsReviewPageComponent', () => {
  let component: GameResultsReviewPageComponent;
  let fixture: ComponentFixture<GameResultsReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameResultsReviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameResultsReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
