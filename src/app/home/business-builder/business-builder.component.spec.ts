import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBuilderComponent } from './business-builder.component';

describe('BusinessBuilderComponent', () => {
  let component: BusinessBuilderComponent;
  let fixture: ComponentFixture<BusinessBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessBuilderComponent]
    });
    fixture = TestBed.createComponent(BusinessBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
