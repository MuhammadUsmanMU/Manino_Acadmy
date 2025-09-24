import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhanceComponent } from './enhance.component';

describe('EnhanceComponent', () => {
  let component: EnhanceComponent;
  let fixture: ComponentFixture<EnhanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnhanceComponent]
    });
    fixture = TestBed.createComponent(EnhanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
