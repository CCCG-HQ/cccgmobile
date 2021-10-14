import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import * as yt from 'ionic-youtube-streams';
import * as youtube from 'ionic-youtube-search';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { YtService } from '../yt.service';
import { IonDatetime, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';
//import "rxjs/add/operator/map";
//import "rxjs/Rx";
import { Observable } from "rxjs";
import {InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'

import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { HTTP } from '@ionic-native/http/ngx';
import { Http } from '@angular/http';

@Component({
  selector: 'app-updatecenter',
  templateUrl: './updatecenter.page.html',
  styleUrls: ['./updatecenter.page.scss'],
})
export class UpdatecenterPage implements OnInit {

  videos: Observable<any[]>;
  items: Observable<any[]>;
  oldVideos: Observable<any[]>;
  searchModel = '';
  dataload = false;
  isDataLoaded = false;
  channelId = 'UCP7vi_uJF52wJ9d-oWdVVkA'; // CCCG Channel ID
  playlists: Observable<any[]>;
  liveVideos: Observable<any[]>;
  latestVideos: Observable<any[]>;
  database: {};
  movieData;
  handleError: Observable<any>;
  url = 'https://firebasestorage.googleapis.com/v0/b/cccg-mobile-c246b.appspot.com/o/data%2Fjson%2Fupdates.json?alt=media&token=1253d306-6af4-4569-9e1c-c01d7b09c4d2';
  slideOpts = {
    initialSlide: 0,
    spaceBetween: -13,
    slidesPerView: 1.6
  };

  data = {
    "liveVideo":
    {
      "videoId": "",
      "videoTitle": "",
      "videoImg": "",
      "videoPub":"",
      "count": "0"
    },
    "latestVideo":
    {
      "videoId": "f2g0uYuLvYE",
      "videoTitle": "Secrets to SOAR!",
      "videoImg": "https://i.ytimg.com/vi/f2g0uYuLvYE/mqdefault_live.jpg",
      "videoPub":"2021-07-18T14:31:53Z",
      "count": "1"
    },
    "videos":
    [
      {
        "videoId": "HRactv__ehk",
        "videoTitle": "How to walk in Divine favor || Pastor Emmanuel Adewusi",
        "videoPub": "2021-03-08T21:53:51Z",
        "videoImg": "https://i.ytimg.com/vi/HRactv__ehk/maxresdefault.jpg",
      },
      {
        "videoId": "ZnbrksfUkPA",
        "videoTitle": "How to Walk in Favor Through Love || Pastor Emmanuel Adewusi",
        "videoPub": "2021-03-08T21:53:51Z",
        "videoImg": "https://i.ytimg.com/vi/ZnbrksfUkPA/maxresdefault.jpg",
      },
      {
        "videoId": "7MxHQPJ8Oek",
 "videoTitle": "Honor Code || Pastor Emmanuel Adewusi",
 "videoPub": "2021-03-08T21:53:51Z",
 "videoImg": "https://i.ytimg.com/vi/7MxHQPJ8Oek/maxresdefault.jpg",
      },
      {
        "videoId": "irg4pbhAh8M",
 "videoTitle": "How to Walk in Favour Through Honour || Pastor Emmanuel Adewusi",
 "videoPub": "2021-03-08T21:53:51Z",
 "videoImg": "https://i.ytimg.com/vi/irg4pbhAh8M/maxresdefault.jpg",
      },
      {
        "videoId": "eZWZ6aa6d8w",
 "videoTitle": "The Believer's Authority || Pastor Emmanuel Adewusi",
 "videoPub": "2021-03-08T21:53:51Z",
 "videoImg": "https://i.ytimg.com/vi/eZWZ6aa6d8w/maxresdefault.jpg",
      },
      {
        "videoId": "_QCH-6PTzpQ",
 "videoTitle": "How to Increase your Authority || Pastor Emmanuel Adewusi",
 "videoPub": "2021-03-08T21:53:51Z",
 "videoImg": "https://i.ytimg.com/vi/_QCH-6PTzpQ/maxresdefault.jpg",
      },
      {
        "videoId": "LSb06x_WzqE",
 "videoTitle": "Friday Night Prayer: Anointed for Favour",
 "videoPub": "2021-03-08T21:53:51Z",
 "videoImg": "https://i.ytimg.com/vi/LSb06x_WzqE/maxresdefault.jpg",
      },
      {
        "videoId": "42kHLdXBSl0",
 "videoTitle": "What Divine Favour is Not || Pastor Emmanuel Adewusi",
 "videoPub": "2021-03-08T21:53:51Z",
 "videoImg": "https://i.ytimg.com/vi/42kHLdXBSl0/maxresdefault.jpg",
      }
    ],
    "oldVideos":
    [
      {
        "videoId": "K1chPpDEP8Q",
 "videoTitle": "Open My Eyes To See | Pastor Emmanuel Adewusi",
 "videoPub": "2020-12-29T23:48:09Z",
 "videoImg": "https://i.ytimg.com/vi/K1chPpDEP8Q/mqdefault.jpg",
      },
      {
        "videoId": "6-0bYaab4WI",
 "videoTitle": "Help us Lord | Friday Night Prayers",
 "videoPub": "2020-12-30T00:10:49Z",
 "videoImg": "https://i.ytimg.com/vi/6-0bYaab4WI/mqdefault.jpg",
      },
      {
        "videoId": "aXvfljDmUV0",
 "videoTitle": "Knockout | Night Prayer",
 "videoPub": "2020-12-30T00:11:07Z",
 "videoImg": "https://i.ytimg.com/vi/aXvfljDmUV0/mqdefault.jpg",
      },
      {
        "videoId": "zrp_z98tG5g",
 "videoTitle": "Impact Through Prayer || Night Prayer",
 "videoPub": "2020-12-30T00:11:54Z",
 "videoImg": "https://i.ytimg.com/vi/zrp_z98tG5g/mqdefault.jpg",
      },
      {
        "videoId": "XcWz_WvSGE4",
        "videoTitle": "Renewal of Vision || Friday Night Prayer",
        "videoPub": "2020-12-30T00:12:22Z",
        "videoImg": "https://i.ytimg.com/vi/XcWz_WvSGE4/mqdefault.jpg",
      },
      {
        "videoId": "6AcDc826NR0",
 "videoTitle": "Renewal of Strength & Wisdom to Pursue Vision 2020 || Friday Night Prayer",
 "videoPub": "2020-12-30T00:12:37Z",
 "videoImg": "https://i.ytimg.com/vi/6AcDc826NR0/mqdefault.jpg",
      },
      {
        "videoId": "Mwzdbmd-huI",
 "videoTitle": "Christ Like || Friday Night Prayer",
 "videoPub": "2020-12-30T00:12:48Z",
 "videoImg": "https://i.ytimg.com/vi/Mwzdbmd-huI/mqdefault.jpg",
      },
      {
        "videoId": "wLotJ99K4GY",
 "videoTitle": "Friday Night Prayer: The Blessing",
 "videoPub": "2020-12-30T00:13:23Z",
 "videoImg": "https://i.ytimg.com/vi/wLotJ99K4GY/mqdefault.jpg",
      },
      {
        "videoId": "nJgKjIi30k4",
 "videoTitle": "Friday Night Prayer || Healing & Deliverance",
 "videoPub": "2020-12-30T00:13:37Z",
 "videoImg": "https://i.ytimg.com/vi/nJgKjIi30k4/mqdefault.jpg",
      },
      {
        "videoId": "OOjleNj14lo",
 "videoTitle": "Friday Night Prayer || Release of the Spirit of Wisdom",
 "videoPub": "2020-12-30T00:13:59Z",
 "videoImg": "https://i.ytimg.com/vi/OOjleNj14lo/mqdefault.jpg",
      },
      {
        "videoId": "mU2Eqi4FGnQ",
 "videoTitle": "Friday Night Prayer: The Latter Rain",
 "videoPub": "2020-12-30T00:14:16Z",
 "videoImg": "https://i.ytimg.com/vi/mU2Eqi4FGnQ/mqdefault.jpg",
      },
      {
        "videoId": "Ctkrws5nulk",
 "videoTitle": "Friday Night Prayer: Divine Covering",
 "videoPub": "2020-12-30T00:14:43Z",
 "videoImg": "https://i.ytimg.com/vi/Ctkrws5nulk/mqdefault.jpg",
      },
    ],


  };

  type: string;

  constructor(private readonly streamingMedia: StreamingMedia, private ytService: YtService, private play: YoutubeVideoPlayer,
    private router: Router, private http: HTTP, private localNotifications: LocalNotifications, private fcm: FCM, 
    private plt: Platform, private detector: ChangeDetectorRef, private ngZone:NgZone,private inAppBrowser: InAppBrowser) 
  {
    /* this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    });

    this.fcm.hasPermission().then(hasPermission => {
      if (hasPermission) {
        console.log("Has permission!");
      }
    }) */
    this.plt.ready().then(async () => {
      await this.getItems();
      this.isDataLoaded = true;
      //alert("jam jam " + this.database);
      this.detector.detectChanges();
      this.type = "sermons";
    });


    
      //alert("cons: " + this.dataload);
  }
 
   getItems(){

    /* this.http.setHeader('*', 'Access-Control-Allow-Origin' , '*');
    this.http.setHeader('*', 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.http.setHeader('*', 'Accept','application/json');
    this.http.setHeader('*', 'Content-Type','application/json');
    this.http.setDataSerializer('json'); */

    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'GET'
    };


    return new Promise((resolve, reject) => {

     // this.http.setDataSerializer('json');

      this.http.get(this.url, {}, {}).then(res =>{
        console.log(res.data);
        this.database = JSON.parse(res.data);
        //alert(this.database);
        //alert("more " + JSON.stringify(this.database["latestVideo"].videoId))
        this.dataload = true;
        resolve(JSON.parse(res.data));
        this.ngZone.run;
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
  

  simpleNotif() 
    {
      alert("er:");
      this.localNotifications.schedule({
        text: 'Delayed ILocalNotification',
        trigger: {at: new Date(new Date().getTime() + 10)},
        led: 'FF0000',
        sound: null
     });
    }

    openWebPage(url: string){

      //alert(url);

      const options: InAppBrowserOptions = {
        location: 'no'
      }
  
      const browser = this.inAppBrowser.create(url, '_self', options);
    }

  itemTapped(id: string, title: string, datePub: string) {
    console.log("the id is " +  id);
    this.router.navigate(['/playvid', {id: id, title: title, datePub: datePub}]);
  }

  invokeVideoPlayer(){
    this.play.openVideo('t6Z4mbEHxQM');
  }

  determineLiveOrLatest(){
      
  }

  searchPlaylists() {
    this.playlists = this.ytService.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    }, err => {
      console.log("failed to get playlists");
    })
  }

  async search(){
    alert("search model " + this.searchModel);
    alert('open vic');
    console.log('open Videos:');
    //this.videos = await youtube.search('cccg');
    console.log('Videos:');
    console.log(this.videos);
  }

  async streamVideo(videoId:string){
    alert("lets try streaming " + videoId);
    const info: any = await yt.info(videoId);
    alert(info.formats[0].url);
    this.streamURL(info.formats[0].url);
  }

  private streamURL(url:any){
    const options: StreamingVideoOptions = {
      successCallback: () => {

      },
      errorCallback: (e) => {
        console.log('Error streaming');
        alert("error " + e);
      },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: true
    };

    this.streamingMedia.playVideo(url,options);
  }

  ngOnInit() {
    //alert("cons in init: " + this.dataload);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


}
