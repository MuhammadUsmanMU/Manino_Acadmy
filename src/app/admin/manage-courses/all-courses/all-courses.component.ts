import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
// Form fields
  subject: string = 'Assignment Results Available';
  greetingText: string = 'Hello {{studentName}},';
  emailContent: string =
    'Your results for "{{assignmentName}}" are now available. Please click the following button to view your result. <br> {{assignment_result_link}}';
  emailStatusEnabled: boolean = true;

  // Search + Pagination + Sorting
  searchTerm: string = '';
  currentPage = 1;
  itemsPerPage = 8;
  selectedSort: string = ''; // Asc or Desc

  // Dropdowns
  showSortDropdown = false;
  selectedLimit: number | null = null;
  showLimitDropdown = false;

  // Table data
  courses = [
  {
    id: 1,
    img: '../../../../assets/subscription/1.png',
    title: 'How to Improve Your Productivity',
    description: 'Learn simple and effective tips to improve your productivity at work and in life.',
    category: 'Productivity',
    status: 'Active'
  },
  {
    id: 2,
    img: '../../../../assets/subscription/1.png',
    title: 'Top 10 Travel Destinations 2025',
    description: 'Explore the best travel destinations to visit this year for unforgettable experiences.',
    category: 'Travel',
    status: 'Active'
  },
  {
    id: 3,
    img: '../../../../assets/subscription/1.png',
    title: 'Healthy Eating Habits',
    description: 'Discover how to maintain healthy eating habits with practical tips and recipes.',
    category: 'Health',
    status: 'Active'
  },
  {
    id: 4,
    img: '../../../../assets/subscription/1.png',
    title: 'Mastering Angular for Beginners',
    description: 'A complete guide to learning Angular framework step-by-step for beginners.',
    category: 'Technology',
    status: 'Active'
  },
  {
    id: 5,
    img: '../../../../assets/subscription/1.png',
    title: 'How to Save Money Effectively',
    description: 'Learn proven methods to save money and manage your personal finances wisely.',
    category: 'Finance',
    status: 'Inactive'
  },
  {
    id: 6,
    img: '../../../../assets/subscription/1.png', // Assuming a default image path for new entries
    title: 'Innovation and Creativity: Think Outside the Box',
    description: 'Unleash your creative potential and foster innovative thinking.',
    category: 'Productivity',
    subCategory: 'Innovation and Creativity', // Note: subCategory is not currently displayed in the HTML table
    instructor: 'Anthony Shao',
    status: 'Inactive'
  },
  {
    id: 7,
    img: '../../../../assets/subscription/1.png',
    title: 'Leadership Essentials: Inspire and Influence',
    description: 'Develop key leadership skills to inspire and influence your team effectively.',
    category: 'Productivity',
    subCategory: 'Leadership',
    instructor: 'Anthony Shao',
    status: 'Active'
  },
  {
    id: 8,
    img: '../../../../assets/subscription/1.png',
    title: 'Work-Life Balance: Achieve Harmony and Well-being',
    description: 'Strategies to balance your professional and personal life for overall well-being.',
    category: 'Productivity',
    subCategory: 'Work-Life Balance',
    instructor: 'Anthony Shao',
    status: 'Active'
  },
  {
    id: 9,
    img: '../../../../assets/subscription/1.png',
    title: 'Effective Communication Skills: Connect and Influence',
    description: 'Enhance your communication skills for better personal and professional interactions.',
    category: 'Productivity',
    subCategory: 'Communication',
    instructor: 'Antony Clara',
    status: 'Inactive'
  },
  {
    id: 10,
    img: '../../../../assets/subscription/1.png',
    title: 'Stress Management: Achieve Inner Peace',
    description: 'Techniques and practices to effectively manage stress and find inner calm.',
    category: 'Productivity',
    subCategory: 'Motivation',
    instructor: 'Antony Clara',
    status: 'Active'
  },
  {
    id: 11,
    img: '../../../../assets/subscription/1.png',
    title: 'Decision-Making Mastery: Make Better Choices',
    description: 'Improve your decision-making process for more effective outcomes.',
    category: 'Productivity',
    subCategory: 'Leadership',
    instructor: 'Antony Clara',
    status: 'Active'
  },
  {
    id: 12,
    img: '../../../../assets/subscription/1.png',
    title: 'Time Management Mastery: Boost Your Productivity',
    description: 'Master time management techniques to maximize your productivity and efficiency.',
    category: 'Productivity',
    subCategory: 'Time Management',
    instructor: 'Antony Clara',
    status: 'Active'
  }
];

  constructor(private router: Router) {}

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.showSortDropdown = false;
      this.showLimitDropdown = false;
    }
  }

  // Form submit
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Template updated:', this.subject);
  }

  // Toggle status
  onStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.emailStatusEnabled = target.checked;
  }

  // Paginated Table (Filter -> Sort -> Paginate)
  get paginatedTable() {
    // 1. Filter (searchTerm includes ID + all fields)
    const filtered = this.courses.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // 2. Paginate
    const start = (this.currentPage - 1) * this.itemsPerPage;
    let visibleItems = filtered.slice(start, start + this.itemsPerPage);

    // 3. Sort the visible items (Asc/Desc by ID)
    if (this.selectedSort === 'Asc') {
      visibleItems = visibleItems.sort((a, b) => a.id - b.id);
    } else if (this.selectedSort === 'Desc') {
      visibleItems = visibleItems.sort((a, b) => b.id - a.id);
    }

    return visibleItems;
  }

  // Total pages for pagination (based on search filter)
  get totalPages() {
    const filtered = this.courses.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return Math.ceil(filtered.length / this.itemsPerPage);
  }

  // Pagination controls
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  nextPage() {
    this.changePage(this.currentPage + 1);
  }
  prevPage() {
    this.changePage(this.currentPage - 1);
  }

  // Dropdowns
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
    this.showLimitDropdown = false;
  }

  toggleLimitDropdown() {
    this.showLimitDropdown = !this.showLimitDropdown;
    this.showSortDropdown = false;
  }

  selectSort(option: string) {
    this.selectedSort = option;
    this.showSortDropdown = false;
  }

  selectLimit(limit: number) {
    this.selectedLimit = limit;
    this.itemsPerPage = limit;
    this.showLimitDropdown = false;
    this.currentPage = 1;
  }

}
