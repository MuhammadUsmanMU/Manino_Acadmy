import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
isNavbarOpen = false;

  toggleDropdown() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');
    if (dropdown && toggle && !dropdown.contains(event.target as Node) && !toggle.contains(event.target as Node)) {
      this.isNavbarOpen = false;
    }
  }
}
