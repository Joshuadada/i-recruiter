import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BecomeExpertComponent } from './become-expert/become-expert.component';

const routes: Routes = [
  { 
    path: '',
    component: ClientPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        redirectTo: '/'
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'become-expert',
        component: BecomeExpertComponent
      },
      {
        path: 'become-expert',
        component: BecomeExpertComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule {}
