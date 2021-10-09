import { Component, OnInit } from '@angular/core';
import { Email } from '../../../src/assets/smtp.js';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-testimonybank',
  templateUrl: './testimonybank.page.html',
  styleUrls: ['./testimonybank.page.scss'],
})
export class TestimonybankPage implements OnInit {

  first: any;
  last: any;
  email: any;
  phone: any;
  summary: any;
  StageOrLive: any;
  testtype: any;
  testimonies: any;
  url: any;

  public form = [
    { val: 'My testimony read for me', isChecked: true },
    { val: 'To deliver my testimony on stage', isChecked: false },
  ];

  constructor(public alertController: AlertController, public router: Router,private http: HttpClient) { }

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

  runFunc(){
    //alert(this.testtype);
    //this.testimonies = this.testtype;
    if(this.testtype=="")
    {
      this.testimonies = "";
      return;
    }

    this.url = 'https://cccgtestimonies.azurewebsites.net/testimony?type=' + this.testtype;
    
    this.http.get(this.url).subscribe((response) => {
      console.log(response);
      let result = response["submissions"];
      this.testimonies = result.replace("---------","");
    });
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
