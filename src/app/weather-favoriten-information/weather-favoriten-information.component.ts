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
  weatherFavorite :  Weatherdata[];
  constructor(private _weatherService: WeatherServiceService, private router: Router) { }

  ngOnInit() {
  
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._weatherService.addWeather({ name } as Weatherdata)
      .subscribe(weather => {
        this.weatherFavorite.push(weather);
      });
  }

}
