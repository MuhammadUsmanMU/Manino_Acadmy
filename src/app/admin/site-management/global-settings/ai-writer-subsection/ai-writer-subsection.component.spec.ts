import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterSubsectionComponent } from './ai-writer-subsection.component';

describe('AiWriterSubsectionComponent', () => {
  let component: AiWriterSubsectionComponent;
  let fixture: ComponentFixture<AiWriterSubsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiWriterSubsectionComponent]
    });
    fixture = TestBed.createComponent(AiWriterSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
