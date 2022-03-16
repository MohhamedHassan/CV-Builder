import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvbuilderComponent } from './components/cvbuilder/cvbuilder.component';

const routes: Routes = [
  {
    path:'',
    component:CvbuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvBuilderRoutingModule { }
