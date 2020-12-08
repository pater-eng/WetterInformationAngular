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
  private currentPage:number=0;

  constructor(private weatherService: WeatherServiceService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.getAlllistWeather(this.currentPage);
  }

  getAlllistWeather(page:number): void{
    this.weatherService.getAllListWeather(page)
    .subscribe(weather => this.weather = weather);
  }

  onNavigate(){
    this.router.navigate(['/'])
  }
}
