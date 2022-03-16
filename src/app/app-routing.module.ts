import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import('src/app/screens/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'cv',
    loadChildren:() => import('src/app/screens/cv-builder/cv-builder.module').then(m => m.CvBuilderModule)
  },
  {
    path:'privacy-policy',
    loadChildren:() => import('src/app/screens/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path:'terms-conditions',
    loadChildren:() => import('src/app/screens/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule)
  },  
  {
    path:'contact-us',
    loadChildren:() => import('src/app/screens/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path:'result-result',
    loadChildren:() => import('src/app/screens/results/results.module').then(m => m.ResultsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }