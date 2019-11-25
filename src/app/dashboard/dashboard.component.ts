import { Component, OnInit } from '@angular/core';
import { Weatherdata } from 'app/Weather';
import {WeatherServiceService} from '../Services/weather-service.service';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weather: Weatherdata[] = [];

  constructor(private weatherService: WeatherServiceService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather()
      .subscribe(weather => this.weather = weather.slice(1, 3));//slice = 1-5 Städte werden angezeigt
  }

}
