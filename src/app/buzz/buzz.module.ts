import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzPageRoutingModule } from './buzz-routing.module';

import { BuzzPage } from './buzz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzPageRoutingModule
  ],
  declarations: [BuzzPage]
})
export class BuzzPageModule {}
