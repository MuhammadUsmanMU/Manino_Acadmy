import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.scss']
})
export class ManagePagesComponent {
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

   pages = [
    { id: 1, name: 'Home Page 1', url: 'https://lemen.amentotec.h.com', status: 'PUBLISHED' },
    { id: 2, name: 'Home Page 2', url: 'https://lemen.amentotec.h.com/home-two', status: 'PUBLISHED' },
    { id: 3, name: 'Home Page 3', url: 'https://lemen.amentotec.h.com/home-three', status: 'PUBLISHED' },
    { id: 4, name: 'Home Page 4', url: 'https://lemen.amentotec.h.com/home-four', status: 'PUBLISHED' },
    { id: 5, name: 'Home Page 5', url: 'https://lemen.amentotec.h.com/home-five', status: 'PENDING' },
    { id: 6, name: 'Home Page 6', url: 'https://lemen.amentotec.h.com/home-six', status: 'PENDING' },
    { id: 7, name: 'Home Page 7', url: 'https://lemen.amentotec.h.com/home-seven', status: 'DRAFT' },
    { id: 8, name: 'Home Page 8', url: 'https://lemen.amentotec.h.com/home-eight', status: 'DRAFT' },
    { id: 9, name: 'Home Page 9', url: 'https://lemen.amentotec.h.com/home-nine', status: 'PUBLISHED' },
    { id: 10, name: 'Faq', url: 'https://lemen.amentotec.h.com/faq', status: 'DRAFT' },
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
      const filtered = this.pages.filter(page =>
        page.id.toString().includes(this.searchTerm) ||
        page.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        page.url.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        page.status.toLowerCase().includes(this.searchTerm.toLowerCase())
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
      const filtered = this.pages.filter(page =>
        page.id.toString().includes(this.searchTerm) ||
        page.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        page.url.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        page.status.toLowerCase().includes(this.searchTerm.toLowerCase())
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
