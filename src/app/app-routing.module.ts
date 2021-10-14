import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'testimony',
    loadChildren: () => import('./testimony/testimony.module').then( m => m.TestimonyPageModule)
  },
  {
    path: 'bookmeeting',
    loadChildren: () => import('./bookmeeting/bookmeeting.module').then( m => m.BookmeetingPageModule)
  },
  {
    path: 'ride',
    loadChildren: () => import('./ride/ride.module').then( m => m.RidePageModule)
  },
  {
    path: 'askpastor',
    loadChildren: () => import('./askpastor/askpastor.module').then( m => m.AskpastorPageModule)
  },
  {
    path: 'buzz',
    loadChildren: () => import('./buzz/buzz.module').then( m => m.BuzzPageModule)
  },
  {
    path: 'nuggets',
    loadChildren: () => import('./nuggets/nuggets.module').then( m => m.NuggetsPageModule)
  },
  {
    path: 'playvid',
    loadChildren: () => import('./playvid/playvid.module').then( m => m.PlayvidPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'testimonybank',
    loadChildren: () => import('./testimonybank/testimonybank.module').then( m => m.TestimonybankPageModule)
  },
  {
    path: 'updatecenter',
    loadChildren: () => import('./updatecenter/updatecenter.module').then( m => m.UpdatecenterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
