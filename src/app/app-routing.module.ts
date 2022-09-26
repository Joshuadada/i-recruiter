import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recruiter',
    loadChildren: () =>
    import('./recruiter/recruiter.module').then(m => m.RecruiterModule)
  },
  { path: 'job-seeker', loadChildren: () => import('./job-seeker/job-seeker.module').then(m => m.JobSeekerModule) },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: 'learner', loadChildren: () => import('./learner/learner.module').then(m => m.LearnerModule) },
  {
    path: '',
    loadChildren: () =>
      import('./client-page/client-page.module').then(m => m.ClientPageModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./client-page/client-page.module').then(m => m.ClientPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
