import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubsectionComponent } from './assignment-subsection.component';

describe('AssignmentSubsectionComponent', () => {
  let component: AssignmentSubsectionComponent;
  let fixture: ComponentFixture<AssignmentSubsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentSubsectionComponent]
    });
    fixture = TestBed.createComponent(AssignmentSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
