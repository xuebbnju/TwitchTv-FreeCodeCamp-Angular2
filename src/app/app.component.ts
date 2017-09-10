import { Component } from '@angular/core';

import {Result} from './result';
import {GetDataService} from './getdata.service'
import { OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private getData: GetDataService)
   { }
 ngOnInit():void{
 	 this.getData.getData(this.results);  
 }
 active={'all':true,'online':false,'offline':false}
 activeItem="all";
 results:Result[]=[];



 beActive(num:string){
  this.active[ this.activeItem]=false;
   this.active[num]=true;
   this.activeItem=num;
 }
 

 	
 }


