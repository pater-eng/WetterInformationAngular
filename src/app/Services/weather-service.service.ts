import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

import {Weatherdata} from '../Weather';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherServiceService {
private baseUrl:string='http://localhost:8086/api';
private headers = new Headers({'Content-Type':'application/json',
                               'Access-Control-Allow-Origin':'http://localhost:4200',
                               'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin, Authorization, X-Requested-With'});
private options = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }
  
getAllWeather(){
  return this._http.get(this.baseUrl+'/allWeather',this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}

getCityName(name:string){
  return this._http.get(this.baseUrl+'/weather/'+name,this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}

getWeatherCity(name:string,id:number){
  return this._http.get(this.baseUrl+'/weathercity/'+name+'/'+id,this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}

saveWeatherdata(name:string){
  return this._http.post(this.baseUrl+'/saveWeatherdata/'+name,this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}

updateWeatherdata(name:string, weather:Weatherdata, id:number){
  return this._http.put(this.baseUrl+'/updateWeather/'+name+'/'+id, JSON.stringify(weather),this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}

errorHandler(error:Response){
  return Observable.throw(error||'SERVER ERROR');
}


}
