import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadershipCertificatesComponent } from './sales-leadership-certificates.component';

describe('SalesLeadershipCertificatesComponent', () => {
  let component: SalesLeadershipCertificatesComponent;
  let fixture: ComponentFixture<SalesLeadershipCertificatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesLeadershipCertificatesComponent]
    });
    fixture = TestBed.createComponent(SalesLeadershipCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
