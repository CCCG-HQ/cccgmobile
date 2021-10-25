import { Component, OnInit } from '@angular/core';
import { Email } from '../../../src/assets/smtp.js';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

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
  url: any;

  public form = [
    { val: 'My testimony read for me', isChecked: true },
    { val: 'To deliver my testimony on stage', isChecked: false },
  ];

  constructor(public alertController: AlertController, public router: Router, private http:HTTP) { }

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

  async validAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Testimony',
      subHeader: 'Missing info!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    //this.router.navigate(['/']);
  }

  ngOnInit() {
  }

  submit(){
    //console.log("emailing");

    if(this.first == "" || this.first == null)
    {
       this.validAlert("Please enter a first name");
    }


    if(this.last == "" || this.last == null)
    {
      this.validAlert("Please enter a last name")
    }

    if(this.email == "" || this.email == null)
    {
      this.validAlert("Please enter your email")
    }


    if(this.summary == "" || this.summary == null)
    {
      this.validAlert("Please enter your testimony summary")
    }

    if(this.first != "" && this.last != "" && this.email != "" && this.summary != "" && this.first != null && this.last != null
    && this.email != null && this.summary != null)
    {
      var body = "First name : " + this.first + '<br/><br/>' + 
      "Last name : " + this.last + '<br/><br/>' + 
      "Email: " + this.email + '<br/><br/>' + 
      "Phone : " + this.phone + '<br/><br/>' + 
      "Summary : " + this.summary + '<br/><br/>' + 
      "Live or On Stage: " + this.StageOrLive;


      this.url = 

      "https://api.elasticemail.com/v2/email/send?apikey=AC7071D99A31A0A95279BF4802C6B080A15A5F2E83C71DD90BFB3254B7489DC54EBD545CDD674275EB8E9AA355385BA8&subject=" 

      + "Testimony Submission from CCCG Mobile!" + 

      "&from=cccgit@gmail.com&fromName=CCCG&sender=cccgit@gmail.com&senderName=CCCG&msgFrom=&msgFromName=&replyTo=&replyToName=&to=cccgit@gmail.com&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml="
      
      + body +
      
      "&bodyText=" 

      + body + 

      "&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=0&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1&bodyAmp=&charsetBodyAmp=";
    
      //console.log(this.url);

      this.sendEmail();
    }
      

  }

  sendEmail(){

    //console.log("sending");

    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'GET'
    };


    return new Promise((resolve, reject) => {

      this.http.setDataSerializer('urlencoded');

      this.url = encodeURI(this.url);

      console.log(this.url);

      this.http.post(this.url, {}, {}).then(res =>{
        this.presentAlert();
        resolve(JSON.parse(res.data));
      })
      .catch(err =>{
        alert("Y" + err);
        reject(err);
      });
    });


    /* return this.http.get(this.url,headers).pipe(map(data => { this.database=data; console.log(data); })).subscribe(result => {
      console.log(result);
    }); */
  }

}
