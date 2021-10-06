import { Component, OnInit } from '@angular/core';
import { Email } from '../../../src/assets/smtp.js';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  first: any;
  last: any;
  phone: any;
  feedture: any;

  constructor(public alertController: AlertController, public router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Feedback/Feature Request',
      subHeader: 'Submitted!',
      message: 'Thank you for your submission. We will reach out to you shortly.',
      buttons: ['OK']
    });

    await alert.present();

    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

  submit(){
    console.log("emailing");

    var body = "First name : " + this.first + '\n' + 
    "Last name : " + this.last + '\n' + 
    "Phone : " + this.phone + '\n' + 
    "Feedback/Feature Request : " + this.feedture + '\n';


    //alert(body);


    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'cccgit@gmail.com',
      Password : 'A21F5920919F984EF2E759A1BD3DD986266D',
      To : 'cccgit@gmail.com',
      From : 'cccgit@gmail.com',
      Subject : 'Feedback/Feature submission (CCCG Mobile): ' + this.first,
      Body : body
      }).then( this.presentAlert());

  }

}
