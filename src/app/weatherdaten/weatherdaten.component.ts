import { Component, OnInit, EventEmitter,Input, Output} from '@angular/core';
import {WeatherServiceService} from '../Services/weather-service.service'
import {Weatherdata} from '../weather';


@Component({
  selector: 'app-weatherdaten',
  templateUrl: './weatherdaten.component.html',
  styleUrls: ['./weatherdaten.component.css']
})
export class WeatherdatenComponent implements OnInit {
  private weather = new Weatherdata();
  submitted = false;

  @Input() value:string;
  @Output() readValue = new EventEmitter<string>();
  constructor(private _weatherService: WeatherServiceService) { }

  ngOnInit() {
    this.getCity();
  }

  getCity():void {
    this._weatherService.getCityName(name)
      .subscribe(
        data =>{
          this.weather = data;
          console.log("DATA: " +data);
         
        });
                      
  }

  getWeatherCity(name:string, id:number):void {
    this._weatherService.getWeatherCity(name,id)
      .subscribe(
        data =>{
          this.weather = data;
          console.log("DATA: " +data);
         
        });
                      
  }



  update() {
    this.readValue.emit(this.value);

  }
 
}
