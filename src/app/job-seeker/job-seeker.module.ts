import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    JobSeekerComponent,
  ],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    SharedModule
  ]
})
export class JobSeekerModule { }
