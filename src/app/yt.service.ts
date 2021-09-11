import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class YtService {
  apiKey = 'AIzaSyBaEi2JO2-725tgz0vz0Hk74wxGDQPqHYA';
  url = "https://firebasestorage.googleapis.com/v0/b/cccg-mobile-c246b.appspot.com/o/data%2Fjson%2Fvideos.json?alt=media&token=68e1181e-8d0b-4ec4-ae9a-1fea1052b969";
  //apiKey = 'AIzaSyBuZWspufZ2JMzXPh6W5mUitfezsOhUiaM';
 
  constructor(public http: Http, public httpClient: HttpClient) { }

  getLiveVideo(channel)
  {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&eventType=live&type=video')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }


  getLatestVideo(channel)
  {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=1&order=date&type=video')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }
 
  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }
 
  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }

}
