import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../Services/weather-service.service'
import {Weatherdata} from '../weather';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-weather-favoriten-information',
  templateUrl: './weather-favoriten-information.component.html',
  styleUrls: ['./weather-favoriten-information.component.css']
})
export class WeatherFavoritenInformationComponent implements OnInit {
  weather = new Weatherdata();
  constructor(private _weatherService: WeatherServiceService, private router: Router) { }

  ngOnInit() {
   this.getAllWeather()
  }

  getAllWeather(){
    this._weatherService.getWeather()
    .subscribe((weather)=>{
       console.log(weather);
      // this.weather=weather;// Diese Weatherdata sind gleich Weatherdata vom Backend
     },(error)=>{
       console.log(error);
     })
  }





  onNavigate(){
    this.router.navigate(['/searchweathercity']);
  }

}
