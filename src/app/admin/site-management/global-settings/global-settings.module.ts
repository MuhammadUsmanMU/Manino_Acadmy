
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { GlobalSettingsRoutingModule } from './global-settings-routing.module';
import { GlobalSettingsComponent } from './global-settings.component';
import { AiWriterSettingsComponent } from './ai-writer-settings/ai-writer-settings.component';
import { ApiSettingsComponent } from './api-settings/api-settings.component';
import { MobileAppSettingsComponent } from './mobile-app-settings/mobile-app-settings.component';
import { AssignmentSettingsComponent } from './assignment-settings/assignment-settings.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { AiWriterSubsectionComponent } from './ai-writer-subsection/ai-writer-subsection.component';
import { ApiSubsectionComponent } from './api-subsection/api-subsection.component';
import { AssignmentSubsectionComponent } from './assignment-subsection/assignment-subsection.component';
import { EmailSubsectionComponent } from './email-subsection/email-subsection.component';
import { MobileAppSubsectionComponent } from './mobile-app-subsection/mobile-app-subsection.component';


@NgModule({
 declarations: [
    GlobalSettingsComponent,
    AiWriterSettingsComponent,
    ApiSettingsComponent,
    MobileAppSettingsComponent,
    AssignmentSettingsComponent,
    EmailSettingComponent,
    AiWriterSubsectionComponent,
    ApiSubsectionComponent,
    AssignmentSubsectionComponent,
    EmailSubsectionComponent,
    MobileAppSubsectionComponent
  ],
  imports: [
    CommonModule,
    GlobalSettingsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
     // ✅ export if used in parent layouts
  ]
})
export class GlobalSettingsModule {}
