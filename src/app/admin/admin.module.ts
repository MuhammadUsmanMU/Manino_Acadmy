
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { InsightsComponent } from './insights/insights.component';
import { ManagePagesComponent } from './site-management/manage-pages/manage-pages.component';
import { EmailSettingsComponent } from './site-management/email-settings/email-settings.component';
import { SubscriptionListComponent } from './manage-subscriptions/subscription-list/subscription-list.component';
import { HelpComponent } from './help/help.component';
import { PaymentMethodsComponent } from './transactions-payments/payment-methods/payment-methods.component';
import { PurchasedSubscriptionComponent } from './manage-subscriptions/purchased-subscription/purchased-subscription.component';
import { AllBlogsComponent } from './manage-blogs/all-blogs/all-blogs.component';
import { CategoriesComponent } from './manage-blogs/categories/categories.component';
import { DisputesComponent } from './disputes/disputes.component';
import { AdminComponent } from './admin.component';
import { StudentsComponent } from './manage-users/students/students.component';
import { InstructorsComponent } from './manage-users/instructors/instructors.component';
import { NewBlogComponent } from './manage-blogs/new-blog/new-blog.component';
import { IdentityVerificationComponent } from './identity-verification/identity-verification.component';
import { CategoryComponent } from './community/category/category.component';
import { CommunityComponent } from './community/community.component';
import { BadgesComponent } from './badges/badges.component';
import { CourseCategoryComponent } from './manage-courses/course-category/course-category.component';
import { AllCoursesComponent } from './manage-courses/all-courses/all-courses.component';
import { CourseEnrollmentsComponent } from './manage-courses/course-enrollments/course-enrollments.component';

@NgModule({
 declarations: [
    HeaderComponent,
    SidebarComponent,
    InsightsComponent,
    ManagePagesComponent,
    EmailSettingsComponent,
    StudentsComponent,
    SubscriptionListComponent,
    HelpComponent,
    PaymentMethodsComponent,
    PurchasedSubscriptionComponent,
    AllBlogsComponent,
    CategoriesComponent,
    DisputesComponent,
    AdminComponent,
    StudentsComponent,
    InstructorsComponent,
    NewBlogComponent,
    IdentityVerificationComponent,
    CategoryComponent,
    CommunityComponent,
    BadgesComponent,
    CourseCategoryComponent,
    AllCoursesComponent,
    CourseEnrollmentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent // ✅ export if used in parent layouts
  ]
})
export class AdminModule {}
