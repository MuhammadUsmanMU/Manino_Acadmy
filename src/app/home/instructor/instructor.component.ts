import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent {
teamMembers: TeamMember[] = [];

  constructor() { }

  ngOnInit(): void {
    // Populate team members data
    this.teamMembers = [
      {
        name: 'Sienna Hewitt',
        title: 'Professional Coach',
        description: 'Emotional Intelligence (EQ-i 2.0 & Leadership Readiness)',
        imageUrl: '../../../assets/instructors/sienna.jpeg' // Placeholder image
      },
      {
        name: 'Ashwin Santiago',
        title: 'Professional Coach',
        description: 'High-Performance Team Coaching',
        imageUrl: '../../../assets/instructors/Ashwin.jpeg' // Placeholder image
      },
      {
        name: 'Caitlin King',
        title: 'Professional Coach',
        description: 'Conflict Resolution & Cultural Fluency',
        imageUrl: '../../../assets/instructors/caitlyn.jpeg' // Placeholder image
      },
      {
        name: 'Owen Garcia',
        title: 'Professional Coach',
        description: 'Emotional Intelligence (EQ-i 2.0 & Leadership Readiness)',
        imageUrl: '../../../assets/instructors/owen.jpeg' // Placeholder image
      },
      {
        name: 'Lulu Meyers',
        title: 'Professional Coach',
        description: 'Female Leadership & Empowerment',
        imageUrl: '../../../assets/instructors/lulu.jpeg' // Placeholder image
      },
      {
        name: 'Orlando Diggs',
        title: 'Professional Coach',
        description: 'High-Performance Team Coaching',
        imageUrl: '../../../assets/instructors/orlando.jpeg' // Placeholder image
      },
      {
        name: 'Kyla Clay',
        title: 'Professional Coach',
        description: 'Conflict Resolution & Cultural Fluency',
        imageUrl: '../../../assets/instructors/kyla.jpeg' // Placeholder image
      },
      {
        name: 'Brianna Ware',
        title: 'Professional Coach',
        description: 'Female Leadership & Empowerment',
        imageUrl: '../../../assets/instructors/brlanna.jpeg' // Placeholder image
      }
    ];
  }


  ngAfterViewInit(): void {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    (card as HTMLElement).style.animationPlayState = 'paused';
    observer.observe(card);
  });
}

}
