import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent {
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
  table = [
    { id: 1, emailTitle: 'Assignment Result', roleType: 'Student', status: 'ENABLED' },
    { id: 2, emailTitle: 'Assignment In Review', roleType: 'Instructor', status: 'DISABLED' },
    { id: 3, emailTitle: 'Assignment Assigned', roleType: 'Student', status: 'ENABLED' },
    { id: 4, emailTitle: 'Quiz Result', roleType: 'Student', status: 'ENABLED' },
    { id: 5, emailTitle: 'Quiz In Review', roleType: 'Instructor', status: 'ENABLED' },
    { id: 6, emailTitle: 'Course Assigned', roleType: 'Instructor', status: 'ENABLED' },
    { id: 7, emailTitle: 'Subscription Renewal', roleType: 'Instructor', status: 'DISABLED' },
    { id: 8, emailTitle: 'Subscription Renewal', roleType: 'Student', status: 'ENABLED' },
    { id: 9, emailTitle: 'Course Rejected', roleType: 'Instructor', status: 'ENABLED' },
    { id: 10, emailTitle: 'Course Approved', roleType: 'Instructor', status: 'DISABLED' }
  ];

  constructor() {}

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
    const filtered = this.table.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
      item.emailTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.roleType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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
    const filtered = this.table.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
      item.emailTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.roleType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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
