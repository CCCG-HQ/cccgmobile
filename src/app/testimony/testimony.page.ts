import { Component, OnInit } from '@angular/core';
import { Email } from '../../../src/assets/smtp.js';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.page.html',
  styleUrls: ['./testimony.page.scss'],
})
export class TestimonyPage implements OnInit {

  first: any;
  last: any;
  email: any;
  phone: any;
  summary: any;
  StageOrLive: any;

  public form = [
    { val: 'My testimony read for me', isChecked: true },
    { val: 'To deliver my testimony on stage', isChecked: false },
  ];

  constructor(public alertController: AlertController, public router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Testimony',
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
    "Email: " + this.email + '\n' + 
    "Phone : " + this.phone + '\n' + 
    "Summary : " + this.summary + '\n' + 
    "Live or On Stage: " + this.StageOrLive;


    //alert(body);


    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'cccgit@gmail.com',
      Password : 'A21F5920919F984EF2E759A1BD3DD986266D',
      To : 'cccgit@gmail.com',
      From : 'cccgit@gmail.com',
      Subject : 'Testimony submission (CCCG Mobile): ' + this.first,
      Body : body
      }).then( this.presentAlert());

  }

}
