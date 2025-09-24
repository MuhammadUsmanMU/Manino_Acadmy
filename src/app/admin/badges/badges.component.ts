import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {
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
  blogs = [
  {
    id: 1,
    img: '../../../../assets/subscription/1.png',
    title: 'How to Improve Your Productivity',
    description: 'Learn simple and effective tips to improve your productivity at work and in life.',
    category: 'Productivity',
    status: 'ENABLED'
  },
  {
    id: 2,
    img: '../../../../assets/subscription/1.png',
    title: 'Top 10 Travel Destinations 2025',
    description: 'Explore the best travel destinations to visit this year for unforgettable experiences.',
    category: 'Travel',
    status: 'DISABLED'
  },
  {
    id: 3,
    img: '../../../../assets/subscription/1.png',
    title: 'Healthy Eating Habits',
    description: 'Discover how to maintain healthy eating habits with practical tips and recipes.',
    category: 'Health',
    status: 'ENABLED'
  },
  {
    id: 4,
    img: '../../../../assets/subscription/1.png',
    title: 'Mastering Angular for Beginners',
    description: 'A complete guide to learning Angular framework step-by-step for beginners.',
    category: 'Technology',
    status: 'ENABLED'
  },
  {
    id: 5,
    img: '../../../../assets/subscription/1.png',
    title: 'How to Save Money Effectively',
    description: 'Learn proven methods to save money and manage your personal finances wisely.',
    category: 'Finance',
    status: 'DISABLED'
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
    const filtered = this.blogs.filter(item =>
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
    const filtered = this.blogs.filter(item =>
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

  goToNewBlog() {
  this.router.navigate(['/admin/manage-blogs/new-blog']);
  }
}
