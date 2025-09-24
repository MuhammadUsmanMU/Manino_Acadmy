import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-enrollments',
  templateUrl: './course-enrollments.component.html',
  styleUrls: ['./course-enrollments.component.scss']
})
export class CourseEnrollmentsComponent {
   // Form fields (These seem unrelated to the table data but are kept as they were in your original component)
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

  // Table data - Renamed from 'courses' to 'enrollments'
  enrollments = [
    {
      id: 538,
      transactionId: 'pi_3Be8bnN7De3aLM1f5f0LEez',
      courseImg: '../../../../assets/instructors/Ashwin.jpeg', // Placeholder, update with actual image paths if available
      courseTitle: 'Work-Life Balance: Achieve Harmony and Wellbeing',
      studentImg: '../../../../assets/instructors/brlanna.jpeg', // Placeholder
      studentName: 'Sarah Chapman',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg', // Placeholder
      tutorName: 'Anthony Shao',
      amount: 330.00,
      tutorPayout: 313.50,
      status: 'COMPLETE'
    },
    {
      id: 530,
      transactionId: 'pi_3RZsginN7De3aLM3g9NHYS',
      courseImg: '../../../../assets/instructors/Ashwin.jpeg',
      courseTitle: 'Time Management Mastery: Boost Your Productivity',
      studentImg: '../../../../assets/instructors/brlanna.jpeg',
      studentName: 'Sarah Chapman',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg',
      tutorName: 'Antony Clara',
      amount: 132.00,
      tutorPayout: 125.40,
      status: 'COMPLETE'
    },
    {
      id: 524,
      transactionId: 'pi_3RWKVXIN7De3aLM1f9429En',
      courseImg: '../../../../assets/instructors/Ashwin.jpeg',
      courseTitle: 'Decision-Making Mastery: Make Better Choices',
      studentImg: '../../../../assets/instructors/brlanna.jpeg',
      studentName: 'Test Test',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg',
      tutorName: 'Antony Clara',
      amount: 398.52,
      tutorPayout: 378.59,
      status: 'COMPLETE'
    },
    {
      id: 520,
      transactionId: 'N/A', // No transaction ID in image for this row
      courseImg: '../../../../assets/instructors/Ashwin.jpeg',
      courseTitle: 'Time Management Mastery: Boost Your Productivity',
      studentImg: '../../../../assets/instructors/brlanna.jpeg',
      studentName: 'Sarah Chapman',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg',
      tutorName: 'Antony Clara',
      amount: 132.00,
      tutorPayout: 125.40,
      status: 'COMPLETE'
    },
    {
      id: 516,
      transactionId: 'N/A', // No transaction ID in image for this row
      courseImg: '../../../../assets/instructors/Ashwin.jpeg',
      courseTitle: 'Innovation and Creativity: Think Outside the Box',
      studentImg: '../../../../assets/instructors/brlanna.jpeg',
      studentName: 'Sarah Chapman',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg',
      tutorName: 'Anthony Shao',
      amount: 309.00,
      tutorPayout: 293.55,
      status: 'COMPLETE'
    },
    {
      id: 514,
      transactionId: 'N/A', // No transaction ID in image for this row
      courseImg: '../../../../assets/instructors/Ashwin.jpeg',
      courseTitle: 'Time Management Mastery: Boost Your Productivity',
      studentImg: '../../../../assets/instructors/brlanna.jpeg',
      studentName: 'Sarah Chapman',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg',
      tutorName: 'Antony Clara',
      amount: 132.00,
      tutorPayout: 125.40,
      status: 'COMPLETE'
    },
    {
      id: 505,
      transactionId: 'pi_3RE3TN7De3aLM0ZbYfwKf',
      courseImg: '../../../../assets/instructors/Ashwin.jpeg',
      courseTitle: 'Stress Management: Achieve Inner Peace',
      studentImg: '../../../../assets/instructors/brlanna.jpeg',
      studentName: 'Test Test',
      tutorImg: '../../../../assets/instructors/caitlyn.jpeg',
      tutorName: 'Antony Clara',
      amount: 242.00,
      tutorPayout: 229.90,
      status: 'COMPLETE'
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
    // 1. Filter (searchTerm includes ID + all relevant fields from the image)
    const filtered = this.enrollments.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
      item.transactionId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.courseTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.studentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.tutorName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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
    const filtered = this.enrollments.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
      item.transactionId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.courseTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.studentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.tutorName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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