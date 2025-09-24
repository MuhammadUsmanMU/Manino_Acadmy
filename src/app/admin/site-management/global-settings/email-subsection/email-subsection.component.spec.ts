import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSubsectionComponent } from './email-subsection.component';

describe('EmailSubsectionComponent', () => {
  let component: EmailSubsectionComponent;
  let fixture: ComponentFixture<EmailSubsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSubsectionComponent]
    });
    fixture = TestBed.createComponent(EmailSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
