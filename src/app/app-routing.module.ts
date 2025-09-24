import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LandingComponent } from './home/landing/landing.component';
import { ProgramsPageComponent } from './home/programs-page/programs-page.component';
import { PlatinumPageComponent } from './home/platinum-page/platinum-page.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutusComponent } from './home/about-us/about-us.component';
import { BillingPageComponent } from './home/billing-page/billing-page.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { GoldPageComponent } from './home/gold-page/gold-page.component';
import { LivSessionpageComponent } from './home/liv-sessionpage/liv-sessionpage.component';
import { AdminComponent } from './admin/admin.component';
import { InstructorComponent } from './home/instructor/instructor.component';
import { SalesLeadershipCertificatesComponent } from './home/sales-leadership-certificates/sales-leadership-certificates.component';
import { TermAndConditionsComponent } from './home/term-and-conditions/term-and-conditions.component';
import { BusinessBuilderComponent } from './home/business-builder/business-builder.component';
import { BlogsComponent } from './home/blogs/blogs.component';


const routes: Routes = [

 {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
 },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'leadership-certificates', component: SalesLeadershipCertificatesComponent },
  { path: 'terms-and-conditions', component: TermAndConditionsComponent },
  { path: 'business-builder', component: BusinessBuilderComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'live-session', component: LivSessionpageComponent },
  { path: 'program-page', component: ProgramsPageComponent },
  { path: 'platinum-package', component: PlatinumPageComponent },
  { path: 'gold-package', component: GoldPageComponent },
  { path: 'billing-form', component: BillingPageComponent },
  { path: 'landing-page', component: LandingComponent },
  { path: 'instructor', component: InstructorComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // 'top' or 'enabled'
  anchorScrolling: 'enabled',
  // This is important if you're navigating to the *same* URL with just a fragment change
  onSameUrlNavigation: 'reload', 
};
@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // <--- Add this line
      anchorScrolling: 'enabled' // Optional: if you also use #anchors in your URLs
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
