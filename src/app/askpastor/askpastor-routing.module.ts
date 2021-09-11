import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskpastorPage } from './askpastor.page';

const routes: Routes = [
  {
    path: '',
    component: AskpastorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskpastorPageRoutingModule {}
