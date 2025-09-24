import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
isSidebarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Optionally set initial sidebar state based on screen size or user preference
    this.isSidebarOpen = window.innerWidth > 768; // Open by default on larger screens
  }

  /**
   * Toggles the sidebar open/closed state.
   */
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}