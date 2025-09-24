import { Component } from '@angular/core';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent {
   activeSidebarItem: string = 'ai-writer-settings'; // Default tab

  sidebarItems = [
    { id: 'ai-writer-settings', label: 'AI writer settings' },
    { id: 'api-settings', label: 'API settings' },
    { id: 'mobile-app-settings', label: 'Mobile App settings' },
    { id: 'assignments-settings', label: 'Assignments Settings' },
    { id: 'email-settings', label: 'Email settings' }
  ];

  setActiveSidebarItem(itemId: string): void {
    this.activeSidebarItem = itemId;
  }
}
