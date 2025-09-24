import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-liv-sessionpage',
  templateUrl: './liv-sessionpage.component.html',
  styleUrls: ['./liv-sessionpage.component.scss']
})
export class LivSessionpageComponent {
  liveSessionCards=[
  {
    img:'../../assets/liveSessionPage/cards/1.png',
    head:'Wednesday, March 5, 2025',
    para:'1:00 - 2:00 PM USA Eastern Time'
  },

    {
    img:'../../assets/liveSessionPage/cards/2.png',
    head:'Wednesday, March 5, 2025',
    para:'1:00 - 2:00 PM USA Eastern Time'
  },

    {
    img:'../../assets/liveSessionPage/cards/3.png',
    head:'Wednesday, March 5, 2025',
    para:'1:00 - 2:00 PM USA Eastern Time'
  },

    {
    img:'../../assets/liveSessionPage/cards/4.png',
    head:'Wednesday, March 5, 2025  ',
    para:'1:00 - 2:00 PM USA Eastern Time'
  },
]

isOpen: boolean[] = [false, false, false, false, false, false];

  faqs = [
    {
      question: "What’s The Mannino Executive Coaching Academy?",
      answer: "The Mannino Executive Coaching Academy is a professional training platform offering ICF-accredited executive coaching programs designed to help individuals become certified executive coaches and build successful coaching businesses."
    },
    {
      question: "Is the certification ICF-accredited?",
      answer: "Yes, our certification is fully accredited by the International Coach Federation (ICF)."
    },
    {
      question: "What are the requirements to get ICF-certified?",
      answer: "Requirements include completing our training program, logging coaching hours, and passing the ICF certification exam."
    },
    {
      question: "What learning resources are provided?",
      answer: "We provide video tutorials, reading materials, and live coaching sessions to support your learning journey."
    },
    {
      question: "Can I complete the program at my own pace?",
      answer: "Yes, our program is self-paced, allowing you to learn according to your schedule."
    },
    {
      question: "Do you provide networking opportunities?",
      answer: "Yes, we offer networking events and a community platform for connecting with peers and mentors."
    }
  ];

toggleAccordion(index: number) {
    this.isOpen[index] = !this.isOpen[index]; // Toggle the state of the clicked item
  }
}
