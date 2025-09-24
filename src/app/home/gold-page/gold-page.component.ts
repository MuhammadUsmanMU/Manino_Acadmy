import { Component } from '@angular/core';

@Component({
  selector: 'app-gold-page',
  templateUrl: './gold-page.component.html',
  styleUrls: ['./gold-page.component.scss']
})
export class GoldPageComponent {
  goldCards = [
    {
      img: '../../../assets/goldpage/cards/1.png',
      head: 'One-Year Membership to The M.E.C. state-of-the-art LMS platform, featuring:',
      para: 'Interactive training modules',
      para2: 'Quizzes',
      para3: 'Patented AI-driven coaching frameworks',
    },
    {
      img: '../../../assets/goldpage/cards/2.png',
      head: 'On-Demand Learning',
      para: 'Pre-recorded Executive Coaching video content'
    },
    {
      img: '../../../assets/goldpage/cards/3.png',
      head: 'Downloadable Rich Content',
      para: 'Over 1,000 real-world PDFs, PowerPoints, and training documents covering coaching models, frameworks, case studies, and best practices'
    },
    {
      img: '../../../assets/goldpage/cards/4.png',
      head: 'Customizable AI Co-Pilot Coach Assistant',
      para: 'Includes the patented The M.E.C. app for mobile (Android/iOS)'
    }
  ];
}
