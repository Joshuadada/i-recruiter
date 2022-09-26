import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSeekerComponent } from './job-seeker.component';

const routes: Routes = [{ path: '', component: JobSeekerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
