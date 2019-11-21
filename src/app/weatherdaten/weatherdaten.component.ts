import { Component, OnInit, EventEmitter,Input, Output, ViewChild} from '@angular/core';
import {WeatherServiceService} from '../Services/weather-service.service'
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
  weather = new Weatherdata();
 // heroes: Hero[];
  name:string;
  aString="Jude";
 
  inputField : FormControl = new FormControl;

     
  constructor(private _weatherService: WeatherServiceService, private router: Router, private activedRoute: ActivatedRoute) {
  }
  
  ngOnInit() {
      //this.getCity();
      this.getAllWeather();
    
    }
       
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this._weatherService.addWeatherdata({ name } as Weatherdata)
        .subscribe(data => {
          this.weather = data;
        });
    }

      
  getCity(){

    this.inputField.valueChanges
    .subscribe(inputField => this._weatherService.getCityName(inputField)
    .subscribe(results =>{
      this.weather=results;
      console.log("RESULTS: " +results);
      console.log("WEATHER: " +this.weather);
      console.log("WEATHER: " +this.weather, JSON);
      console.log("WEATHER-Data: " +this.weather.name);
      console.log("WEATHER-Data: " +this.weather.pressure);
      console.log("WEATHER-Data: " +this.weather.speed);
      console.log("WEATHER-Data: " +this.weather.sunrise);
      console.log("WEATHER-Data: " +this.weather.sunset);
      console.log("WEATHER-Data: " +this.weather.temp_max);
      console.log("WEATHER-Data: " +this.weather.temp_min);
      console.log("WEATHER-Data: " +this.weather.temperature);
      console.log("WEATHER-Data: " +this.weather.timezone);
      console.log("WEATHER-Data: " +this.weather.base);
      console.log("WEATHER-Data: " +this.weather.cod);
      console.log("WEATHER-Data: " +this.weather.countryCode);
      console.log("WEATHER-Data: " +this.weather.deg);
      console.log("WEATHER-Data: " +this.weather.description);
      console.log("WEATHER-Data: " +this.weather.humidity);
      console.log("WEATHER-Data: " +this.weather.icon);
      console.log("WEATHER-Data: " +this.weather.id);
      console.log("WEATHER-Data: " +this.weather.lat);
      console.log("WEATHER-Data: " +this.weather.main);
      console.log("WEATHER-Data: " +this.weather.dt); 
      //console.log("WEATHER-Data: " +this.weather.);     
    }))
                    
  }

  getWeather(): void {
    this._weatherService.getAllWeather()
    .subscribe(data => this.weather = data);
  }


  getAllWeather(){
    this._weatherService.getAllWeather()
    .subscribe((weather)=>{
       console.log(weather);
       this.weather=weather;// Diese Weatherdata sind gleich Weatherdata vom Backend
     },(error)=>{
       console.log(error);
     })
  }

}
