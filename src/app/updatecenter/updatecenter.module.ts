import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecenterPageRoutingModule } from './updatecenter-routing.module';

import { UpdatecenterPage } from './updatecenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecenterPageRoutingModule
  ],
  declarations: [UpdatecenterPage]
})
export class UpdatecenterPageModule {}
