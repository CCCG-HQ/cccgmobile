import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-playvid',
  templateUrl: './playvid.page.html',
  styleUrls: ['./playvid.page.scss'],
})


export class PlayvidPage implements OnInit {

  url: SafeResourceUrl;
  chaturl: SafeResourceUrl;
  title: string;
  datePub: string;
  vidDate: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.route.snapshot.paramMap.get('id'));
    this.chaturl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/live_chat?v=9_b-iwRw-_Q" + "&embed_domain=" + window.location.hostname);
    console.log("constructor " + this.url);
    this.title = this.route.snapshot.paramMap.get('title');
    this.datePub = this.route.snapshot.paramMap.get('datePub');
    
    var date = new Date(this.datePub);
    this.vidDate = date.toLocaleDateString();
  }

  ngOnInit() {
  }

}
