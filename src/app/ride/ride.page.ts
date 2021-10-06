import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Email } from '../../../src/assets/smtp.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {

  first: any;
  last: any;
  email: any;
  phone: any;
  address: any;
  service: any;

  constructor(public alertController: AlertController, public router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CCCG Ride Request',
      subHeader: 'Submitted!',
      message: 'Thank you! Someone will contact you shortly',
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
    "Address : " + this.address + '\n' +
    "Service : " + this.service + '\n';


    //alert(body);


    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'cccgit@gmail.com',
      Password : 'A21F5920919F984EF2E759A1BD3DD986266D',
      To : 'cccgit@gmail.com',
      From : 'cccgit@gmail.com',
      Subject : 'CCCG Ride Request Submission (CCCG Mobile): ' + this.first,
      Body : body
      }).then( this.presentAlert());

  }

}
