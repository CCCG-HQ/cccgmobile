import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonybankPage } from './testimonybank.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonybankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonybankPageRoutingModule {}
