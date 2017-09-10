 import { Injectable } from "@angular/core";
 import { Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Result} from './result';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/observable/from";
 declare var jQuery:any;
 @Injectable()
 export class GetDataService {
   private channels= ["ESL_SC2","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
   private streamUrl: string = 'https://wind-bow.gomix.me/twitch-api/streams/';
   private channelUrl:string='https://wind-bow.gomix.me/twitch-api/channels/';   private  query: string = '?callback=JSONP_CALLBACK';
      
   constructor(public jsonp: Jsonp) {}
   getData(results:Result[]){
       this.channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };
    jQuery.getJSON(makeURL("streams", channel), function(data) {
      var g,
          s;
      if (data.stream === null) {
        g = "Offline";
        s = "offline";
      } else if (data.stream === undefined) {
        g = "Account Closed";
        s = "offline";
      } else {
        g= data.stream.game;
        s ="online";
      };
      jQuery.getJSON(makeURL("channels", channel), function(data) {
        var l = data.logo != null ? data.logo : "https://i.loli.net/2017/08/29/59a5425208fa8.jpg",
          n = data.display_name != null ? data.display_name : channel,
          d = s === "online" ? ': ' + data.status : "",
          u=data.url;
          results.push({status:s,game:g,logo:l,name:n,url:u,description:d});

         
      });
    });
  });
      



    }


    
    
 }
