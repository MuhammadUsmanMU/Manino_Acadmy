import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivSessionpageComponent } from './liv-sessionpage.component';

describe('LivSessionpageComponent', () => {
  let component: LivSessionpageComponent;
  let fixture: ComponentFixture<LivSessionpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivSessionpageComponent]
    });
    fixture = TestBed.createComponent(LivSessionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
