import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../Services/weather-service.service'
import {Weatherdata} from '../weather';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-favoriten-information',
  templateUrl: './weather-favoriten-information.component.html',
  styleUrls: ['./weather-favoriten-information.component.css']
})
export class WeatherFavoritenInformationComponent implements OnInit {
private weather: Weatherdata[];
  constructor(private _weatherService: WeatherServiceService, private router: Router) { }

  ngOnInit() {
   this._weatherService.getAllWeather().subscribe((weather)=>{
      console.log(weather);
      this.weather=weather;// Diese Weatherdata sind gleich Weatherdata vom Backend
    },(error)=>{
      console.log(error);
    })
  }

}
