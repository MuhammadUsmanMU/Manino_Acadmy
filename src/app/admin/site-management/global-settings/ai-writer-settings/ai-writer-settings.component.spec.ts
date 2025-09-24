import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWriterSettingsComponent } from './ai-writer-settings.component';

describe('AiWriterSettingsComponent', () => {
  let component: AiWriterSettingsComponent;
  let fixture: ComponentFixture<AiWriterSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiWriterSettingsComponent]
    });
    fixture = TestBed.createComponent(AiWriterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
