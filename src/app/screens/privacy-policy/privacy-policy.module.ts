import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyComponent } from './components/privacy/privacy.component';


@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule
  ]
})
export class PrivacyPolicyModule { }
