import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSubsectionComponent } from './api-subsection.component';

describe('ApiSubsectionComponent', () => {
  let component: ApiSubsectionComponent;
  let fixture: ComponentFixture<ApiSubsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiSubsectionComponent]
    });
    fixture = TestBed.createComponent(ApiSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
