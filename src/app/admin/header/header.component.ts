import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 isSidebarOpen: boolean = false;
 currentPage: string = '';

 @Output() toggleSidebar = new EventEmitter<boolean>(); // Emit a boolean indicating new state

  constructor(private router: Router) {
    // No direct call to checkScreenSize here, as ngOnInit is more appropriate for initial setup
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get last segment of URL
        const urlParts = event.urlAfterRedirects.split('/');
        this.currentPage = urlParts[urlParts.length - 1];
        
        // Optional: format the name (capitalize first letter)
        this.currentPage = this.currentPage.charAt(0).toUpperCase() + this.currentPage.slice(1);
      }
    });
  
    // Set initial state based on screen size when component initializes
    this.checkScreenSize();
  }

  // Listen for window resize events to update sidebar state
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    // Check if current screen is mobile (less than 768px)
    if (window.innerWidth <= 770) {
      this.isSidebarOpen = false; // Initial state for header elements
      this.toggleSidebar.emit(this.isSidebarOpen);
    } else {
 
      this.isSidebarOpen = true; 

      this.toggleSidebar.emit(this.isSidebarOpen);
    }
  }

  onToggleSidebar(): void {
  if (window.innerWidth <= 770) {
    this.isSidebarOpen = true; // Only open
    this.toggleSidebar.emit(this.isSidebarOpen);
  }
}
  
}
