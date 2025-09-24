import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excutive-coach',
  templateUrl: './excutive-coach.component.html',
  styleUrls: ['./excutive-coach.component.scss']
})
export class ExcutiveCoachComponent {
  showEnrollmentModal: boolean = false; // New property

  constructor(private router: Router) { } // Inject Router

  card = [
  {
    img: '../../assets/cards/gold-card.PNG',
    heading: 'Gold',
    para: 'Professional Coaching Certification with Non-ICF-Approved Training'
  },
  {
    img: '../../assets/cards/premium-card.PNG',
    heading: 'Premium',
    para: 'Advanced ICF Certification with Business Development Training'
  },
  {
    img: '../../assets/cards/business-builder-card.PNG',
    heading: 'Business builder workshop',
    para: 'A workshop package to help you build and grow your coaching business'
  }
];

  openEnrollmentModal(): void {
    this.showEnrollmentModal = true;
  }

  closeEnrollmentModal(): void {
    this.showEnrollmentModal = false;
  }

  selectPackage(packageType: string): void {
    this.closeEnrollmentModal(); // Close the modal
    if (packageType === 'platinum') {
      this.router.navigate(['/platinum-package']);
    } else if (packageType === 'gold') {
      this.router.navigate(['/gold-package']); // Assuming you have a /gold-package route
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
