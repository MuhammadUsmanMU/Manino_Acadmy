// ai-writer-settings.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-writer-settings',
  templateUrl: './ai-writer-settings.component.html',
  styleUrls: ['./ai-writer-settings.component.scss']
})
export class AiWriterSettingsComponent {
  tabs = [
    { id: 'profile', label: 'Profile Settings' },
    { id: 'resume', label: 'Resume Settings' },
    { id: 'sessions', label: 'Sessions Settings' },
    { id: 'assignment', label: 'Assignment Settings' }
  ];

  activeTab = 'resume'; // Set initial active tab to 'resume' as per the image

  profileSettings = {
    enableProfile: true,
    profilePrompt: 'Write a paragraph about the following topic: (topic)',
    enableHeadline: true,
    headlinePrompt: 'Write a paragraph about the following topic: (topic)'
  };

  resumeFields = [
    {
      title: 'Enable on add/edit education',
      toggleLabel: 'Enable AI writer on add/edit education',
      promptLabel: 'Education prompt',
      idPrefix: 'resume-education',
      enabled: true,
      promptText: 'Write a paragraph about the following topic: (topic)'
    },
    {
      title: 'Enable on add/edit experience',
      toggleLabel: 'Enable AI writer on add/edit experience',
      promptLabel: 'Experience prompt',
      idPrefix: 'resume-experience',
      enabled: true,
      promptText: 'Write a paragraph about the following topic: (topic)'
    },
    {
      title: 'Enable on add/edit certificates & awards',
      toggleLabel: 'Enable AI writer on add/edit certificates & awards',
      promptLabel: 'Certificates & awards prompt',
      idPrefix: 'resume-certificates',
      enabled: true,
      promptText: 'Write a paragraph about the following topic: (topic)'
    }
  ];

  sessionSettings = {
    enableSessionNotes: true,
    sessionNotesPrompt: 'Write a paragraph about the following topic: (topic)'
  };

  assignmentSettings = {
    enableAssignmentDescription: true,
    assignmentDescriptionPrompt: 'Add Assignment Prompt',
  };

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}