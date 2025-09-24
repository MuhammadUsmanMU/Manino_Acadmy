import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';
import { ManagePagesComponent } from './site-management/manage-pages/manage-pages.component';
import { EmailSettingsComponent } from './site-management/email-settings/email-settings.component';
import { StudentsComponent } from './manage-users/students/students.component';
import { InstructorsComponent } from './manage-users/instructors/instructors.component';
import { SubscriptionListComponent } from './manage-subscriptions/subscription-list/subscription-list.component';
import { HelpComponent } from './help/help.component';
import { PaymentMethodsComponent } from './transactions-payments/payment-methods/payment-methods.component';
import { PurchasedSubscriptionComponent } from './manage-subscriptions/purchased-subscription/purchased-subscription.component';
import { AllBlogsComponent } from './manage-blogs/all-blogs/all-blogs.component';
import { CategoriesComponent } from './manage-blogs/categories/categories.component';
import { DisputesComponent } from './disputes/disputes.component';
import { AdminComponent } from './admin.component';
import { NewBlogComponent } from './manage-blogs/new-blog/new-blog.component';
import { IdentityVerificationComponent } from './identity-verification/identity-verification.component';
import { CommunityComponent } from './community/community.component';
import { CategoryComponent } from './community/category/category.component';
import { BadgesComponent } from './badges/badges.component';
import { CourseCategoryComponent } from './manage-courses/course-category/course-category.component';
import { AllCoursesComponent } from './manage-courses/all-courses/all-courses.component';
import { CourseEnrollmentsComponent } from './manage-courses/course-enrollments/course-enrollments.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
  { path: 'dashboard', component: InsightsComponent },
  { path: 'site-management/manage-pages', component: ManagePagesComponent },
  // { path: 'site-management/global-settings', component: GlobalSettingsComponent },
  { path: 'site-management/email-settings', component: EmailSettingsComponent },
  { path: 'manage-users/student', component: StudentsComponent },
  { path: 'manage-users/instructors', component: InstructorsComponent },
  { path: 'manage-subscriptions/subscription-list', component: SubscriptionListComponent },
  { path: 'help', component: HelpComponent },
  { path: 'transactions-payments/payment-methods', component: PaymentMethodsComponent },
  { path: 'manage-subscriptions/purchased-subscription', component: PurchasedSubscriptionComponent },
  { path: 'manage-blogs/new-blog', component: NewBlogComponent },
  { path: 'manage-blogs/all-blogs', component: AllBlogsComponent },
  { path: 'manage-blogs/categories', component: CategoriesComponent },
  { path: 'disputes', component: DisputesComponent },
  { path: 'identity-verification', component: IdentityVerificationComponent },
  { path: 'community/communities', component: CommunityComponent },
  { path: 'community/categories', component: CategoryComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'manage-courses/all-courses', component: AllCoursesComponent },
  { path: 'manage-courses/course-category', component: CourseCategoryComponent },
  { path: 'manage-courses/course-enrollment', component: CourseEnrollmentsComponent },

   { path: '', redirectTo: 'insights', pathMatch: 'full' },
     
    {
      path: 'site-management/global-settings',
      loadChildren: () => import('./site-management/global-settings/global-settings.module').then(m => m.GlobalSettingsModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
