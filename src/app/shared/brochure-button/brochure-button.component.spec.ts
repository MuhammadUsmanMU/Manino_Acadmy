import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureButtonComponent } from './brochure-button.component';

describe('BrochureButtonComponent', () => {
  let component: BrochureButtonComponent;
  let fixture: ComponentFixture<BrochureButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrochureButtonComponent]
    });
    fixture = TestBed.createComponent(BrochureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
