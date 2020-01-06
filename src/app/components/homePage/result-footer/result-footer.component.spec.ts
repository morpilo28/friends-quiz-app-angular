import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFooterComponent } from './result-footer.component';

describe('ResultFooterComponent', () => {
  let component: ResultFooterComponent;
  let fixture: ComponentFixture<ResultFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
