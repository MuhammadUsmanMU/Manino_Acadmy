import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-purchased-subscription',
  templateUrl: './purchased-subscription.component.html',
  styleUrls: ['./purchased-subscription.component.scss']
})
export class PurchasedSubscriptionComponent {
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

 table = [
    {
        id: 1,
        orderId: '499',
        transactionId: 'pi_3RARxoinN7de3xLM2hbelvef',
        img: '../../../../assets/subscription/1.png', // Or public URL if hosted
        name: 'Premium',
        period: '6 Months',
        price: '$9999.99',
        validTill: 'October 5, 2025',
        Status: 'ACTIVE'
    },
    {
        id: 2,
        orderId: '369',
        transactionId: 'pi_3QPccl2hnN7de3xLM1xbHR5x8',
        img: '../../../../assets/subscription/1.png', // Or public URL if hosted
        name: 'Premium',
        period: '6 Months',
        price: '$9999.99',
        validTill: 'August 6, 2025',
        Status: 'INACTIVE'
    },
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
        item.orderId.toString().includes(this.searchTerm) ||
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.price.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.Status.toLowerCase().includes(this.searchTerm.toLowerCase())
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
        item.orderId.toString().includes(this.searchTerm) ||
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.price.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.Status.toLowerCase().includes(this.searchTerm.toLowerCase())
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
