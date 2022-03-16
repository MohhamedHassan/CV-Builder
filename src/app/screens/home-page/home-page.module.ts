import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SwiperModule
  ]
})
export class HomePageModule { }
