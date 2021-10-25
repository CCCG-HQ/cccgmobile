import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
//import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { Storage } from '@ionic/storage';
import {InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedIn = false;
  dark = false;

  constructor(
    private inAppBrowser: InAppBrowser,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private fcm: FCM,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  openWebPage(url: string){

    const options: InAppBrowserOptions = {
      location: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self', options);
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
  }


  initializeApp() {
    this.platform.ready().then(() => {
 
      //alert("ready");
      // subscribe to a topic
      // this.fcm.subscribeToTopic('Deals');

      // get FCM token
      this.fcm.getToken().then(token => {
        console.log(token);
        //alert("token: " + token);
      });

      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });      

      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });

      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');

    });
  }

  goToNuggets() {
    this.router.navigate(['/nuggets']);
  }

  goToTestimonies() {
    this.router.navigate(['/testimony']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  
}
