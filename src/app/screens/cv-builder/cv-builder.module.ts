import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBuilderRoutingModule } from './cv-builder-routing.module';
import { CvbuilderComponent } from './components/cvbuilder/cvbuilder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CvbuilderComponent
  ],
  imports: [
    CommonModule,
    CvBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    SwiperModule,
    HttpClientModule
  ]
})
export class CvBuilderModule { }
