import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecenterPage } from './updatecenter.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecenterPageRoutingModule {}
