import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultComponent } from './components/result/result.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    HttpClientModule
  ]
})
export class ResultsModule { }
