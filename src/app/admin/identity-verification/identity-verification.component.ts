import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-identity-verification',
  templateUrl: './identity-verification.component.html',
  styleUrls: ['./identity-verification.component.scss'],
})
export class IdentityVerificationComponent {
  searchTerm: string = '';
  selectedSort: string = ''; // Asc or Desc

  // Dropdowns
  showSortDropdown = false;
  selectedLimit: number | null = null;
  showLimitDropdown = false;

 Users = [
    { id: 1, img : '../../../../assets/admin/download (1).jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 2, img : '../../../../assets/admin/download (2).jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 3, img : '../../../../assets/admin/download.jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'Non verified', Status: 'Active', identity: 'non-verified' },
    { id: 4, img : '../../../../assets/admin/empower_right.png', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Inactive', identity: 'verified' },
    { id: 5, img : '../../../../assets/admin/person-profile.jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'verified' },
    { id: 6, img : '../../../../assets/admin/profile.jpg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'verified' },
    { id: 7, img : '../../../../assets/admin/profile.jpg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 8, img : '../../../../assets/admin/download (1).jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 9, img : '../../../../assets/admin/download (2).jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 10, img : '../../../../assets/admin/download.jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'Non verified', Status: 'Active', identity: 'non-verified' },
    { id: 11, img : '../../../../assets/admin/empower_right.png', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Inactive', identity: 'verified' },
    { id: 12, img : '../../../../assets/admin/person-profile.jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'verified' },
    { id: 13, img : '../../../../assets/admin/profile.jpg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'verified' },
    { id: 14, img : '../../../../assets/admin/profile.jpg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 15, img : '../../../../assets/admin/download (1).jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 16, img : '../../../../assets/admin/download (2).jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'non-verified' },
    { id: 17, img : '../../../../assets/admin/download.jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'Non verified', Status: 'Active', identity: 'non-verified' },
    { id: 18, img : '../../../../assets/admin/empower_right.png', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Inactive', identity: 'verified' },
    { id: 19, img : '../../../../assets/admin/person-profile.jpeg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'verified' },
    { id: 20, img : '../../../../assets/admin/profile.jpg', name: 'Amentotech', email: 'amentotech192@gmail.com', phone:'0312345678', created: 'February 04, 2025', role: 'Instructor', emailVarification: 'verified', Status: 'Active', identity: 'verified' },
  ];

  filteredUsers = [...this.Users];

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

  // Sorting
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
    this.showLimitDropdown = false;
  }

  selectSort(option: string) {
    this.selectedSort = option;
    this.showSortDropdown = false;
    this.sortUsers();
  }

  sortUsers() {
    if (this.selectedSort === 'Asc') {
      this.filteredUsers = [...this.filteredUsers].sort((a, b) => a.id - b.id);
    } else if (this.selectedSort === 'Desc') {
      this.filteredUsers = [...this.filteredUsers].sort((a, b) => b.id - a.id);
    }
  }

  // Limit Dropdown (Filter Users)
  toggleLimitDropdown() {
    this.showLimitDropdown = !this.showLimitDropdown;
    this.showSortDropdown = false;
  }

  selectLimit(limit: number) {
    this.selectedLimit = limit;

    if (limit === 10) {
      this.filteredUsers = this.Users.filter(
        (user) => user.identity.toLowerCase() !== 'verified'
      );
    } else if (limit === 20) {
      this.filteredUsers = this.Users.filter(
        (user) => user.identity.toLowerCase() === 'verified'
      );
    } else if (limit === 30) {
      this.filteredUsers = [...this.Users];
    }

    // Apply sorting again after filtering
    this.sortUsers();
    this.showLimitDropdown = false;
  }

  // Table data after applying search term
  get filteredTable() {
    return this.filteredUsers.filter(
      (item) =>
        item.id.toString().includes(this.searchTerm) ||
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.Status.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.identity.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
