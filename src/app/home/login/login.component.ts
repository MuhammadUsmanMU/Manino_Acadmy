import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword = false;

  // New properties for error/success messages
  submitted = false; // To track if the form has been submitted
  loginFailed = false; // To track if login failed
  loginSuccess = false; // To track if login was successful

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onLogin(): void {
    this.submitted = true; // Mark form as submitted
    this.loginFailed = false; // Reset error on new submission attempt
    this.loginSuccess = false; // Reset success message

    // Basic client-side validation
    if (!this.email || !this.password) {
      this.loginFailed = true; // Set general error if fields are empty
      return; // Stop the login process
    }

    // Optional: Add email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.email)) {
      this.loginFailed = true; // Indicate general failure due to invalid email format
      // Note: The specific email error message is handled in HTML using emailInput.errors?.['pattern']
      return;
    }

    console.log('Login attempt:');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    // In a real application, you would send the email and password to your authentication service.
    // Simulate an API call:
    // For demonstration, let's say a successful login requires specific credentials.
    const CORRECT_EMAIL = 'user@example.com';
    const CORRECT_PASSWORD = 'password123';

    if (this.email === CORRECT_EMAIL && this.password === CORRECT_PASSWORD) {
      setTimeout(() => {
        this.loginSuccess = true;
        // In a real app, you'd typically redirect the user after a successful login
        // e.g., this.router.navigate(['/dashboard']);
        console.log('Login successful!');
      }, 1000); // Simulate network delay
    } else {
      setTimeout(() => {
        this.loginFailed = true; // Set error if credentials are wrong
        console.log('Login failed: Invalid credentials.');
      }, 1000); // Simulate network delay
    }
  }

  togglePasswordVisibility(field: string): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    }
  }

}
