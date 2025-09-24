import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {

  card = [
    { cardName: 'Food', img: '../../../assets/comunityPage/food.png', heading: 'Food & Beverage', para: 'A practical forum to take your cooking skills from dull to delicious', topic: '4', post: '4' },
    { cardName: 'Marketing', img: '../../../assets/comunityPage/marketing.png', heading: 'Advertising', para: 'A practical forum to take your cooking skills from dull to delicious.', topic: '0', post: '0' },
    { cardName: 'Music', img: '../../../assets/comunityPage/marketing.png', heading: 'Announcements', para: 'Official announcements from the administrators.', topic: '0', post: '0' },
  ]


  right = [
    { number: '5', type: 'Forums', img: '../../../assets/comunityPage/right1.png' },
    { number: '4', type: 'Topics', img: '../../../assets/comunityPage/right2.png' },
    { number: '4', type: 'Posts', img: '../../../assets/comunityPage/right3.png' },
    { number: '20', type: 'Members', img: '../../../assets/comunityPage/right4.png' },
  ]




  gradients = [
  'linear-gradient(to right, #4A0FFC, #FFA6A5)',
  'linear-gradient(to right, #966FF4, #9170F4)',
  'linear-gradient(to right, #87CBFF, #BA7DFF)',
  'linear-gradient(to right, #FF8800, #FF2D00)'
];
}
