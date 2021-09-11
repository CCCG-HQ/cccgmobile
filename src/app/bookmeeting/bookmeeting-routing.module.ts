import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmeetingPage } from './bookmeeting.page';

const routes: Routes = [
  {
    path: '',
    component: BookmeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmeetingPageRoutingModule {}
