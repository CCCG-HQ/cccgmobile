import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskpastorPageRoutingModule } from './askpastor-routing.module';

import { AskpastorPage } from './askpastor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskpastorPageRoutingModule
  ],
  declarations: [AskpastorPage]
})
export class AskpastorPageModule {}
