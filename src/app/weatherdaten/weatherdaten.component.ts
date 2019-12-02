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
  weather :  Weatherdata[];
  weather$ :  Weatherdata;
    
  constructor(private _weatherService: WeatherServiceService, 
    private router: Router, private activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this._weatherService.getWeather()
    .subscribe(weather => this.weather = weather);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._weatherService.addWeather({ name } as Weatherdata)
      .subscribe(weather => {
        this.weather.push(weather);
      });
  }

  saveListFavorite(): void {
    this._weatherService.updateWeather(this.weather$)
      .subscribe();
  }
}
