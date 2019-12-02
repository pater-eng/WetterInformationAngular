import { Component, OnInit , Input} from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Weatherdata } from 'app/Weather';
import {WeatherServiceService} from '../Services/weather-service.service';

@Component({
  selector: 'app-weatherdetail',
  templateUrl: './weatherdetail.component.html',
  styleUrls: ['./weatherdetail.component.css']
})
export class WeatherdetailComponent implements OnInit {

  @Input() weather: Weatherdata;
  @Input() id:number;
  @Input() name:string;
  @Input() isFavorite:boolean;
// isFavorite:boolean =true;
  

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherServiceService,
    private location: Location,
    private router: Router,
     private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getWeatherCity();
  }

  getWeatherCity(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.weatherService.getCity(name)
      .subscribe(weather => this.weather = weather);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   // this.weatherService.saveWeather(this.weather)
    
    this.weatherService.updateWeather(this.weather)
      .subscribe(() => this.goBack());
  }

  addFavorite(): void{
      this.isFavorite ? 'true' : 'false';
      this.router.navigate(['/addweathercity/']);
         
   }
  
}
