import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './home/landing/landing.component';
import { EmpowerFutureComponent } from './home/home-page/empower-future/empower-future.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { NextGenerationComponent } from './home/home-page/next-generation/next-generation.component';
import { VertualComponent } from './home/home-page/vertual/vertual.component';
import { FlexibleLearningComponent } from './home/home-page/flexible-learning/flexible-learning.component';
import { EnhanceComponent } from './home/home-page/enhance/enhance.component';
import { ExcutiveCoachComponent } from './home/home-page/excutive-coach/excutive-coach.component';
import { ChooseUsComponent } from './home/home-page/choose-us/choose-us.component';
import { FooterComponent } from './home/footer/footer.component';
import { SuccessStoriesComponent } from './home/home-page/success-stories/success-stories.component';
import { AboutusComponent } from './home/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivSessionpageComponent } from './home/liv-sessionpage/liv-sessionpage.component';
import { Navbar2Component } from './home/navbar2/navbar2.component';
import { ProgramsPageComponent } from './home/programs-page/programs-page.component';
import { PlatinumPageComponent } from './home/platinum-page/platinum-page.component';
import { BillingPageComponent } from './home/billing-page/billing-page.component';
import { GoldPageComponent } from './home/gold-page/gold-page.component';
import { Navbar3Component } from './home/navbar3/navbar3.component';
import { SignupComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { InstructorComponent } from './home/instructor/instructor.component';
import { SalesLeadershipCertificatesComponent } from './home/sales-leadership-certificates/sales-leadership-certificates.component';
import { BusinessBuilderComponent } from './home/business-builder/business-builder.component';
import { TermAndConditionsComponent } from './home/term-and-conditions/term-and-conditions.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { BrochureButtonComponent } from './shared/brochure-button/brochure-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EmpowerFutureComponent,
    NavbarComponent,
    NextGenerationComponent,
    VertualComponent,
    FlexibleLearningComponent,
    EnhanceComponent,
    ExcutiveCoachComponent,
    ChooseUsComponent,
    FooterComponent,
    SuccessStoriesComponent,
    AboutusComponent,
    LivSessionpageComponent,
    Navbar2Component,
    ProgramsPageComponent,
    PlatinumPageComponent,
    BillingPageComponent,
    GoldPageComponent,
    Navbar3Component,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    InstructorComponent,
    SalesLeadershipCertificatesComponent,
    BusinessBuilderComponent,
    TermAndConditionsComponent,
    BlogsComponent,
    BrochureButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }