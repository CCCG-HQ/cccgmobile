import { Injectable } from '@angular/core';

import {
  Plugins,
  Capacitor,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

import { Router } from '@angular/router';

const { PushNotifications } = Plugins;
@Injectable({
  providedIn: 'root',
})
export class FcmService {
  constructor(private router: Router) {}

  initPush() {
    // console.log('platform is ' + Capacitor.platform);
    // if (Capacitor.platform !== 'web') {
    //   console.log('yes maam...');
    //   this.registerPush();
    // }
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable(
      'PushNotifications'
    );
    console.log(isPushNotificationsAvailable);
    if (isPushNotificationsAvailable) {
      this.registerPush();
    }
  }

  private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token));
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log(
          'Action performed: ' + JSON.stringify(notification.notification)
        );
        if (data.detailsId) {
          this.router.navigateByUrl(`/home/`);
        }
      }
    );
  }
}
