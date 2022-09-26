import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnerRoutingModule } from './learner-routing.module';
import { LearnerComponent } from './learner.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LearnerComponent
  ],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    SharedModule
  ]
})
export class LearnerModule { }
