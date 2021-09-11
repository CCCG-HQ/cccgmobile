import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzzPage } from './buzz.page';

const routes: Routes = [
  {
    path: '',
    component: BuzzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzzPageRoutingModule {}
