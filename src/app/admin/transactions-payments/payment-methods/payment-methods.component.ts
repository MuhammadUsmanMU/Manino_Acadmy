import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent {
   payment = [
    { img: '../../../../assets/admin/payment/1_files/Logo-1728997222.png', name: 'Stripe', enabled: true },
    { img: '../../../../assets/admin/payment/2_files/unnamed.png', name: 'Paypal', enabled: true },
    { img: '../../../../assets/admin/payment/3_files/unnamed.png', name: 'Razorpay', enabled: false },
    { img: '../../../../assets/admin/payment/4_files/images', name: 'Paystack', enabled: false },
    { img: '../../../../assets/admin/payment/5_files/Paytm-Logo.png', name: 'Paytm', enabled: true },
    { img: '../../../../assets/admin/payment/6_files/images', name: 'Flutterwave', enabled: true }
  ];

  defaultMethod: string = 'Stripe';
  selectedMethod: any = null;
  selectedMethodDetails = { apiKey: '', secretKey: '' };

  toggleMethod(method: any) {
    method.enabled = !method.enabled;
    console.log(`${method.name} status: ${method.enabled ? 'Enabled' : 'Disabled'}`);
  }

  saveDefaultMethod() {
    alert(`Default method saved: ${this.defaultMethod}`);
  }

  editMethod(method: any) {
    this.selectedMethod = method;
    // Load dummy details (could be fetched from API)
    this.selectedMethodDetails = { apiKey: '', secretKey: '' };
  }

  updateMethod() {
    console.log('Updated details:', this.selectedMethodDetails);
    alert(`${this.selectedMethod.name} updated successfully!`);
  }
}
