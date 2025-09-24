import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent {
  studentsFeedback = [
    { name: 'Abu Bin Ishtiyak', email: 'abubini@gmail.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Ashley Lawson', email: 'ashley@info.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Jane Montgomery', email: 'janem@gmail.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Larry Henry', email: 'larryh@example.com', avatar: '../../../assets/admin/profile.jpeg' }
  ];

  congratulateStudents = [
    { name: 'Esebel Johnson', message: 'Have completed his training', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Larry Henry', message: 'Have achieved his ACC Certification', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Larry Henry', message: 'Have achieved his ICC Certification', avatar: '../../../assets/admin/profile.jpeg' }
  ];

  instructorsDetails = [
    { name: 'Abu Bin Ishti', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Ashley Lawson', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Jane Montgo', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Larry Henry', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' }
  ];

  newUsers = [
    { name: 'Larry Henry', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Ashley Lawson', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' },
    { name: 'Jane Montgomery', email: 'info@softino.com', avatar: '../../../assets/admin/profile.jpeg' }
  ];
}
