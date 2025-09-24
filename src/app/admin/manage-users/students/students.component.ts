import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 8;

  selectedSort = '';
  selectedLimit: number | null = null;

  showSortDropdown = false;
  showLimitDropdown = false;

  showModal = false;

  Students = [
    {
      id: 1,
      name: 'Amentotech',
      email: 'amentotech192@gmail.com',
      phone: '0312345678',
      role: 'Student',
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
    role: 'Student',
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

  // Get table data (filter -> sort -> paginate)
  get paginatedTable() {
    const filtered = this.Students.filter(item =>
      item.id.toString().includes(this.searchTerm) ||
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
    return Math.ceil(this.Students.length / this.itemsPerPage);
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

  // Save user
  saveUser() {
    const newStudent = {
      id: this.Students.length + 1,
      ...this.form,
      created: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      })
    };

    this.Students.push(newStudent);

    // Reset form and close modal
    this.form = {
      name: '',
      email: '',
      phone: '',
      role: 'Student',
      Status: 'Active',
      emailVarification: 'Non-verified',
      identity: 'Non-verified'
    };

    this.closeModal();
    this.currentPage = 1;
  }
}
