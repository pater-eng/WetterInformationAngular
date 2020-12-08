import { Component, OnInit, EventEmitter,Input, Output, ViewChild} from '@angular/core';
import {WeatherServiceService} from '../Services/weather-service.service';
import{PagerService} from '../Services/weather-page.service';
import {Weatherdata} from '../weather';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { switchMap } from "rxjs/operators" 
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-weatherdaten',
  templateUrl: './weatherdaten.component.html',
  styleUrls: ['./weatherdaten.component.css']
})


export class WeatherdatenComponent implements OnInit {
  weather :  Array<Weatherdata>;
  private currentPage:number=0;
  private pages:Array<number>;
  private favorite:boolean;

  title = 'My Favorite Cities: ';

  constructor(private _weatherService: WeatherServiceService, 
    private router: Router, private activedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.getAllListWeather();
  }

getAllListWeather(){
  this._weatherService.getAllListWeather(this.currentPage)
  .subscribe(data =>{
    
    this.weather=data['content'];
    this.pages= new Array(data['totalPages']);
    this.favorite = true;
  })
}

setPage(i, event:any){
  event.preventDefault();
  this.currentPage=i;
  this.getAllListWeather();

}

saveListFavorite(weather: Weatherdata): void {
  
    this._weatherService.saveListWeatherdata(weather)
      .subscribe(data=>{
        let confirm = window.confirm('schon gespeichert !!!');
       }
      );
  }

  delete(weather: Weatherdata): void {
    this.weather = this.weather.filter(h => h !== weather);
    this._weatherService.deleteWeather(weather)
      .subscribe(weather => {
        weather = null;
               
        });
    
  }

  backToStartSide(){
    this.router.navigate(['/dashboard']);
  }
}
