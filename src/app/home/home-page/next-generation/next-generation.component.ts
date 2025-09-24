import { Component } from '@angular/core';

@Component({
  selector: 'app-next-generation',
  templateUrl: './next-generation.component.html',
  styleUrls: ['./next-generation.component.scss']
})
export class NextGenerationComponent {
  cards = [
    {
      img: '../../assets/landing/card1.png',
      heading: 'Explore Our Programs',
      para: 'Designed to equip you with the skills, certification, and confidence to lead.',
      button: 'Get Started',
      route: '/program-page'
    },
    {
      img: '../../assets/landing/card2.png',
      heading: 'Learn More About Us',
      para: 'Watch our introduction video and discover what makes our programs unique!',
      button: 'Watch Now',
      videoLink: 'https://youtu.be/Ktw2Ssdi7Co?si=V0vHXPGz9KT8uGKX'
    },
    {
      img: '../../assets/landing/card3.png',
      heading: 'Sign Up for a Free One-Hour Informational Session',
      para: 'Discover the path to becoming a certified Executive Coach.',
      button: "Let's Begin",
      route: '/live-session'
    }
  ];
}
