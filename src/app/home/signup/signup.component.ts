import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  role = '';
  password = '';
  confirmPassword = '';
  termsAccepted = false;
  showPassword = false;
  showConfirmPassword = false;

  // New properties for error messages
  passwordMismatchError = false;
  submitted = false; // To track if the form has been submitted
  signupFailed = false; // To track if signup failed for general reasons
  signupSuccess = false; // To track if signup was successful

  constructor() { }

  ngOnInit(): void {
  }

  // Handles the registration form submission
  onRegister(): void {
    this.submitted = true; // Mark form as submitted
    this.passwordMismatchError = false; // Reset error on new submission attempt
    this.signupFailed = false; // Reset general signup error
    this.signupSuccess = false; // Reset success message

    // Basic form validation checks
    if (!this.firstName || !this.lastName || !this.email || !this.phoneNumber || !this.role || !this.password || !this.confirmPassword || !this.termsAccepted) {
      this.signupFailed = true; // Indicate general failure due to missing fields
      return; // Stop the registration process if any required field is empty
    }

    if (this.password !== this.confirmPassword) {
      this.passwordMismatchError = true; // Set error to true
      this.signupFailed = true; // Indicate general failure due to password mismatch
      return; // Stop the registration process
    }

    // Email format validation (simple regex, can be more robust)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.email)) {
      this.signupFailed = true; // Indicate general failure due to invalid email format
      return;
    }

    // Password minimum length validation
    if (this.password.length < 6) {
      this.signupFailed = true; // Indicate general failure due to short password
      return;
    }

    console.log('Registration attempt:', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      role: this.role,
      password: this.password,
      termsAccepted: this.termsAccepted
    });

    // In a real application, you would call a registration service here.
    // For demonstration, we'll simulate a successful registration.
    // Replace this with your actual API call.
    // Example: this.authService.register(userData).subscribe(response => { ... }, error => { ... });

    // Simulate a successful registration after a short delay
    setTimeout(() => {
      this.signupSuccess = true;
      // You might want to clear the form or redirect after success
      this.resetForm();
    }, 1000); // Simulate network delay
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword'): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  // Helper to reset the form fields and flags after successful registration
  resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.role = '';
    this.password = '';
    this.confirmPassword = '';
    this.termsAccepted = false;
    this.submitted = false;
    this.passwordMismatchError = false;
  }
}
