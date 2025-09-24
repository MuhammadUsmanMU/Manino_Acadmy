import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent {
billingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.billingForm = this.fb.group({
  paymentMethod: ['stripe', Validators.required],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  company: [''],
  email: ['', [Validators.required, Validators.email]],
  country: ['', Validators.required],
  state: [''],
  zip: [''],
  notes: [''],
  useWallet: [false],
  couponCode: ['']
});
  }

  onSubmit(): void {
    if (this.billingForm.valid) {
      console.log('Billing Data:', this.billingForm.value);
      // Implement payment submission logic here
    }
  }

  applyCoupon(): void {
  const coupon = this.billingForm.get('couponCode')?.value;
  if (coupon) {
    console.log('Applying coupon:', coupon);
    // Add logic to validate/apply coupon if needed
  }
}

}
