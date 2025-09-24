import { Component ,HostListener} from '@angular/core';
interface EmailTemplate {
  id: number;
  name: string;
  colorLabel: string;
  // status: 'ENABLED' | 'DISABLED';
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
color: string = '';
  catagoryname: string = '';
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
  table: EmailTemplate[] = [
    { id: 1, name: 'Music ', colorLabel: 'Student', },
    { id: 2, name: 'Marketing', colorLabel: 'Instructor',  },
    { id: 3, name: 'Food', colorLabel: 'Student',}
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
  // onSubmit(event: Event): void {
  //   event.preventDefault();
  //   console.log('Template updated:', this.catagoryname);
  // }

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
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.colorLabel.toLowerCase().includes(this.searchTerm.toLowerCase()) 
      // item.status.toLowerCase().includes(this.searchTerm.toLowerCase())
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
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.colorLabel.toLowerCase().includes(this.searchTerm.toLowerCase())
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











  editingId: number | null = null; // Track if we are editing an existing category

onSubmit(event: Event): void {

   event.preventDefault();

    if (!this.catagoryname.trim() || !this.color.trim()) {
      alert('Please enter name and color');
      return;
    }

    if (this.editingId) {
      // Update existing category
      const index = this.table.findIndex(c => c.id === this.editingId);
      if (index !== -1) {
        this.table[index].name = this.catagoryname;
        this.table[index].colorLabel = this.color;
      }
      this.editingId = null;
    } else {
      // Add new category
      const newCategory: EmailTemplate = {
        id: this.table.length ? Math.max(...this.table.map(c => c.id)) + 1 : 1,
        name: this.catagoryname,
        colorLabel: this.color
      };
      this.table.push(newCategory);
    }

    // Reset form
    this.catagoryname = '';
    this.color = '#000000';
  }

  // ✅ Delete category
  deleteCategory(id: number): void {
    this.table = this.table.filter(c => c.id !== id);
  }

  // ✅ Edit category
editCategory(item: EmailTemplate): void {
  this.catagoryname = item.name;       // ✅ Correctly set the name
  this.color = item.colorLabel;        // ✅ Set the color code
  this.editingId = item.id;
}


}
