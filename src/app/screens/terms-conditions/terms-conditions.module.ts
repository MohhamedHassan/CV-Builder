import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsComponent } from './components/terms/terms.component';


@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule
  ]
})
export class TermsConditionsModule { }
