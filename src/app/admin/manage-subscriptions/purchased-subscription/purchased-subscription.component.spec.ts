import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedSubscriptionComponent } from './purchased-subscription.component';

describe('PurchasedSubscriptionComponent', () => {
  let component: PurchasedSubscriptionComponent;
  let fixture: ComponentFixture<PurchasedSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasedSubscriptionComponent]
    });
    fixture = TestBed.createComponent(PurchasedSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
