import { Component, OnInit, Input } from '@angular/core';
import { Weatherdata } from 'app/Weather';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-city-information',
  templateUrl: './weather-city-information.component.html',
  styleUrls: ['./weather-city-information.component.css']
})
export class WeatherCityInformationComponent implements OnInit {
 weather= new Weatherdata();
  constructor( private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { weather: Weatherdata }) => {
           this.weather = data.weather;
    });
  }

}
