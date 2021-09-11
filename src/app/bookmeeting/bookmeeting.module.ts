import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmeetingPageRoutingModule } from './bookmeeting-routing.module';

import { BookmeetingPage } from './bookmeeting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmeetingPageRoutingModule
  ],
  declarations: [BookmeetingPage]
})
export class BookmeetingPageModule {}
