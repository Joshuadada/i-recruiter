import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { ClientPageComponent } from './client-page.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClientPageComponent,
    HomeComponent,
    AboutUsComponent,
    BecomeExpertComponent
  ],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    SharedModule
    
  ]
})
export class ClientPageModule { }
