import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppSubsectionComponent } from './mobile-app-subsection.component';

describe('MobileAppSubsectionComponent', () => {
  let component: MobileAppSubsectionComponent;
  let fixture: ComponentFixture<MobileAppSubsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAppSubsectionComponent]
    });
    fixture = TestBed.createComponent(MobileAppSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
