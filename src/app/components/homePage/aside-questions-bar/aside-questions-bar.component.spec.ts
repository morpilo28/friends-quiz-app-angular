import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideQuestionsBarComponent } from './aside-questions-bar.component';

describe('AsideQuestionsBarComponent', () => {
  let component: AsideQuestionsBarComponent;
  let fixture: ComponentFixture<AsideQuestionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideQuestionsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideQuestionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
