import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent {
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 8;

  selectedSort = '';
  selectedLimit: number | null = null;

  showSortDropdown = false;
  showLimitDropdown = false;
  showModal = false;

  Instructors = [
    {
      id: 1,
      name: 'Amentotech',
      email: 'amentotech192@gmail.com',
      phone: '0312345678',
      role: 'Instructor',
      Status: 'Active',
      emailVarification: 'Verified',
      identity: 'Non-verified',
      created: 'February 04, 2025'
    }
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    role: 'Instructor',
    Status: 'Active',
    emailVarification: 'Non-verified',
    identity: 'Non-verified'
  };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.showSortDropdown = false;
      this.showLimitDropdown = false;
    }
  }

  // Filter -> Sort -> Paginate
  get paginatedTable() {
    const filtered = this.Instructors.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.phone.includes(this.searchTerm) ||
      item.role.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    let data = [...filtered];
    if (this.selectedSort === 'Asc') {
      data = data.sort((a, b) => a.id - b.id);
    } else if (this.selectedSort === 'Desc') {
      data = data.sort((a, b) => b.id - a.id);
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    return data.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.Instructors.length / this.itemsPerPage);
  }

  // Pagination
  changePage(page: number) {
    this.currentPage = page;
  }
  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  // Dropdowns
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
  }
  toggleLimitDropdown() {
    this.showLimitDropdown = !this.showLimitDropdown;
  }
  selectSort(option: string) {
    this.selectedSort = option;
    this.showSortDropdown = false;
  }
  selectLimit(limit: number) {
    this.itemsPerPage = limit;
    this.currentPage = 1;
    this.showLimitDropdown = false;
  }

  // Modal
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

  // Save Instructor
  saveUser() {
    const newInstructor = {
      id: this.Instructors.length + 1,
      ...this.form,
      created: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      })
    };

    this.Instructors.push(newInstructor);

    // Reset form
    this.form = {
      name: '',
      email: '',
      phone: '',
      role: 'Instructor',
      Status: 'Active',
      emailVarification: 'Non-verified',
      identity: 'Non-verified'
    };

    this.closeModal();
    this.currentPage = 1;
  }
}
