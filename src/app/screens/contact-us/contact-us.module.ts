import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactUsModule { }
