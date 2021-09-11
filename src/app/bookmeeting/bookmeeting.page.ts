import { Component, OnInit } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'


@Component({
  selector: 'app-bookmeeting',
  templateUrl: './bookmeeting.page.html',
  styleUrls: ['./bookmeeting.page.scss'],
})
export class BookmeetingPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  openWebPage(url: string){

    const options: InAppBrowserOptions = {
      location: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_blank', options);
  }

}
