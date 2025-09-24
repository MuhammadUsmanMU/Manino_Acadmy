import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinumPageComponent } from './platinum-page.component';

describe('PlatinumPageComponent', () => {
  let component: PlatinumPageComponent;
  let fixture: ComponentFixture<PlatinumPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatinumPageComponent]
    });
    fixture = TestBed.createComponent(PlatinumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
