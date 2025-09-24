import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutusComponent {
  userForm!: FormGroup;

  cards = [
    { img: '../../../assets/about/cards/1.avif', name: 'Deborah Smith', text: 'Leadership Coach' },
    { img: '../../../assets/about/cards/2.avif', name: 'James Lee', text: 'Executive Coach' },
    { img: '../../../assets/about/cards/3.jpeg', name: 'Daniel Parker', text: 'Leadership Expert' },
    { img: '../../../assets/about/cards/4.jpeg', name: 'Jessica Morgan', text: 'Coach & Mentor' }
  ];

  plateformCards = [
    {
      img: '../../assets/plateform/img1.png',
      head: 'Blog & Articles',
      para: 'Get expert insights, coaching strategies, and industry trends from top executive coaches.',
      button: 'Go to Blogs',
      route: '/blogs',
      isExternalLink: false, // This is an internal Angular route
      downloadFilename: ''   // Not applicable
    },
    {
    img: '../../assets/plateform/img2.png',
    head: 'E-Books & Guides',
    para: 'Download free coaching guides, business-building strategies, and ICF certification roadmaps.',
    button: 'Download Free E-Book',
    route: '../../assets/coaching e-book.pdf', // <-- Likely correction
    isExternalLink: true,
    downloadFilename: 'coaching-e-book.pdf'
  },
    {
      img: '../../assets/plateform/img3.png',
      head: 'Webinars & Live Events',
      para: 'Join upcoming live training sessions and watch recordings of past events.',
      button: 'Join Free Live Webinar',
      route: '/live-session',
      isExternalLink: false, // This is an internal Angular route
      downloadFilename: ''   // Not applicable
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm2(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
      // Additional logic like sending to backend can be added here
    } else {
      console.warn('Form is invalid!');
    }
  }
}
