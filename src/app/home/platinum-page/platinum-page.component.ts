import { Component } from '@angular/core';

@Component({
  selector: 'app-platinum-page',
  templateUrl: './platinum-page.component.html',
  styleUrls: ['./platinum-page.component.scss']
})
export class PlatinumPageComponent {
  platinumCards = [
    {
      img: '../../../assets/platinumPage/cards/1.png',
      head: 'Two-Year Access to The M.E.C.’s AI-Driven LMS Platform',
      para: 'Interactive training modules',
      para2: 'Knowledge checks and coaching simulations'
    },
    {
      img: '../../../assets/platinumPage/cards/2.png',
      head: 'On-Demand Executive Coaching Videos',
      para: 'Access expert training whenever you need it.'
    },
    {
      img: '../../../assets/platinumPage/cards/3.png',
      head: 'Live, Interactive Webinars',
      para: 'Flexible Monday–Friday evening and weekend sessions to fit any schedule.'
    },
    {
      img: '../../../assets/platinumPage/cards/4.png',
      head: '1,000+ Downloadable Coaching Resources',
      para: 'A robust library of coaching models, case studies, and resources for clients.'
    }
  ];
}
