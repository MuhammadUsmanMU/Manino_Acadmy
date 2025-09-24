import { Component } from '@angular/core';

@Component({
  selector: 'app-email-setting',
  templateUrl: './email-setting.component.html',
  styleUrls: ['./email-setting.component.scss']
})
export class EmailSettingComponent {
tabs = [
    { id: 'googleMap', label: 'Google map' },
    { id: 'googleCalender', label: 'Google calender' },
    { id: 'OpenAi', label: 'OpenAi' },
    { id: 'socialLogin', label: 'Social login settings' },
    { id: 'meetingSettings', label: 'Meeting Settings' }
  ];

  activeTab = 'OpenAi';

  googleMapSetting = {
    enableProfile: true,
    profilePrompt: 'Write a paragraph about the following topic: (topic)',
    enableHeadline: true,
    headlinePrompt: 'Write a paragraph about the following topic: (topic)'
  };

  googleCalenderSetting = [
    {
      title: 'Education Settings',
      toggleLabel: 'Enable on add/edit education',
      promptLabel: 'Education prompt',
      idPrefix: 'resume-education',
      enabled: true,
      promptText: 'Write a paragraph about the following topic: (topic)'
    },
    {
      title: 'Experience Settings',
      toggleLabel: 'Enable on add/edit experience',
      promptLabel: 'Experience prompt',
      idPrefix: 'resume-experience',
      enabled: true,
      promptText: 'Write a paragraph about the following topic: (topic)'
    },
    {
      title: 'Certificates & Awards Settings',
      toggleLabel: 'Enable on add/edit certificates & awards',
      promptLabel: 'Certificates & awards prompt',
      idPrefix: 'resume-certificates',
      enabled: true,
      promptText: 'Write a paragraph about the following topic: (topic)'
    }
  ];

  OpenAiSetting = {
    enableSessionNotes: true,
    sessionNotesPrompt: 'Write a paragraph about the following topic: (topic)'
  };

  socialLoginSetting = {
    enableAssignmentDescription: true,
    assignmentDescriptionPrompt: 'Write a paragraph about the following topic: (topic)',
    enableAssignmentFeedback: true,
    assignmentFeedbackPrompt: 'Write a paragraph about the following topic: (topic)'
  };

   meetingSettingsSetting = {
    enableAssignmentDescription: true,
    assignmentDescriptionPrompt: 'Write a paragraph about the following topic: (topic)',
    enableAssignmentFeedback: true,
    assignmentFeedbackPrompt: 'Write a paragraph about the following topic: (topic)'
  };

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
