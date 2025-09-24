import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleLearningComponent } from './flexible-learning.component';

describe('FlexibleLearningComponent', () => {
  let component: FlexibleLearningComponent;
  let fixture: ComponentFixture<FlexibleLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexibleLearningComponent]
    });
    fixture = TestBed.createComponent(FlexibleLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
