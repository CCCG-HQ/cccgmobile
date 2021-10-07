import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimonybankPageRoutingModule } from './testimonybank-routing.module';

import { TestimonybankPage } from './testimonybank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimonybankPageRoutingModule
  ],
  declarations: [TestimonybankPage]
})
export class TestimonybankPageModule {}
