import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppSettingsComponent } from './mobile-app-settings.component';

describe('MobileAppSettingsComponent', () => {
  let component: MobileAppSettingsComponent;
  let fixture: ComponentFixture<MobileAppSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAppSettingsComponent]
    });
    fixture = TestBed.createComponent(MobileAppSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
