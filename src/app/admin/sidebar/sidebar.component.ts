import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit { // Implement OnInit
  @Input() isOpen: boolean = false; // Add this Input property
  @Output() sidebarClose = new EventEmitter<void>();

  isSiteManagementOpen = false;
  isManageUsersOpen = false;
  isManageSubscriptionsOpen = false;
  isPaymentMethodOpen = false;
  isBlogsOpen = false;
  isCommunityOpen = false;
  isCoursesOpen = false;

  currentRoute = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.setDropdownStates(this.currentRoute);

    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        this.setDropdownStates(this.currentRoute);
      });
  }

  isActive(path: string): boolean {
    return this.currentRoute.includes(path);
  }

  setDropdownStates(url: string) {
    this.isSiteManagementOpen = url.includes('/site-management');
    this.isManageUsersOpen = url.includes('/manage-users');
    this.isManageSubscriptionsOpen = url.includes('/manage-subscriptions');
    this.isPaymentMethodOpen = url.includes('/transactions-payments');
    this.isBlogsOpen = url.includes('/manage-blogs');
    this.isCommunityOpen = url.includes('/community');
    this.isCoursesOpen = url.includes('/manage-courses');
  }

  toggleDropdown(menu: string, path: string): void {
    this.isSiteManagementOpen = false;
    this.isManageUsersOpen = false;
    this.isManageSubscriptionsOpen = false;
    this.isPaymentMethodOpen = false;
    this.isBlogsOpen = false;
    this.isCommunityOpen = false;
    this.isCoursesOpen = false;

    switch (menu) {
      case 'siteManagement':
        this.isSiteManagementOpen = !this.isSiteManagementOpen;
        break;
      case 'manageUsers':
        this.isManageUsersOpen = !this.isManageUsersOpen;
        break;
      case 'manageSubscriptions':
        this.isManageSubscriptionsOpen = !this.isManageSubscriptionsOpen;
        break;
      case 'paymentMethods':
        this.isPaymentMethodOpen = !this.isPaymentMethodOpen;
        break;
      case 'manageBlogs':
        this.isBlogsOpen = !this.isBlogsOpen;
        break;
      case 'manageCommunity':
        this.isCommunityOpen = !this.isCommunityOpen;
        break;
      case 'manageCourses':
        this.isCoursesOpen = !this.isCoursesOpen;
        break;
    }
    // Navigate to the parent path only if the current route is not already within that parent,
    // to avoid unnecessary navigation if a sub-item is already active.
    if (!this.currentRoute.includes(path)) {
      this.router.navigate([path]);
    }
    // Optionally close the sidebar when a dropdown item is clicked on mobile
    // this.isOpen = false;
  } 

  closeSidebar(): void {
    this.sidebarClose.emit();
  }
}