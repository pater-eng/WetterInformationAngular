import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherServiceService,
    private location: Location
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
  const name = this.route.snapshot.paramMap.get('name');
  const id = +this.route.snapshot.paramMap.get('id');
    this.weatherService.updateWeatherdata(name,this.weather, id)
      .subscribe(() => this.goBack());
  }

}
