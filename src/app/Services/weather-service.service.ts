import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';


import {Weatherdata} from '../Weather';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WeatherServiceService {
private baseUrl:string='http://localhost:8086/api';
private getUrl:string='weather';
private headers = new Headers({'Content-Type':'application/json',
                               'Access-Control-Allow-Origin':'http://localhost:4200',
                               'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin, Authorization, X-Requested-With'});
private options = new RequestOptions({headers:this.headers});

weather: Weatherdata;
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private _http:Http,  private http: HttpClient) { }
  

 /** GET heroes from the server */
 getWeather (): Observable<Weatherdata[]> {
  return this.http.get<Weatherdata[]>(this.baseUrl+'/allWeather')
  .pipe(
    //tap(_ => this.log('fetched heroes')),
    // catchError(this.handleError<Weatherdata[]>('getHeroes', []))
    ).catch(this.errorHandler);
  }

  /** GET hero by id. Will 404 if id not found */
    
    getCity(name: string): Observable<Weatherdata> {
     const url = `${this.baseUrl}/${this.getUrl}/${name}`;
     return this.http.get<Weatherdata>(url,this.httpOptions)
     .pipe() 
     .map(response=>response)
     .catch(this.errorHandler);;
    }


     /* GET heroes whose name contains search term */
 searchWeatherdata(name: string): Observable<Weatherdata[]> {
  if (!name.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Weatherdata[]>(`${this.baseUrl}/${this.getUrl}/${name}`,this.httpOptions)
  .pipe()
  .map(response=>response)
  .catch(this.errorHandler);
}




getWeatherCityAndId(name:string,id:number): Observable<Weatherdata[]>{
  return this._http.get(this.baseUrl+'/weathercity/'+name+'/'+id,this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}


saveWeather(weather:Weatherdata): Observable<Weatherdata>{
  return this.http.post<Weatherdata>(this.baseUrl+'/saveWeatherdata', weather ,this.httpOptions)
  .pipe()
  .map(response=>response)
  .catch(this.errorHandler);
}

  /** PUT: update the hero on the server */
  updateWeather(weather:Weatherdata): Observable<Weatherdata> {
    return this.http.put<Weatherdata>(this.baseUrl +'/updateWeather', weather, this.httpOptions)
    .pipe()
    .map(response=>response)
    .catch(this.errorHandler);
  }

updateWeatherdata(name:string, weather:Weatherdata, id:number):Observable<Weatherdata[]>{
  return this._http.put(this.baseUrl+'/updateWeather/'+name+'/'+id, JSON.stringify(weather),this.options)
  .map(response=>response.json())
  .catch(this.errorHandler);
}

//////// Save methods //////////

  /** POST: add a new hero to the server */
 

addWeather (weather: Weatherdata): Observable<Weatherdata> {
  return this.http.post<Weatherdata>(this.baseUrl+'/saveWeatherdata/'+weather.name,this.options) 
  .pipe()
  .map(response=>response)
  .catch(this.errorHandler);
 
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
   // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

errorHandler(error:Response){
  return Observable.throw(error||'SERVER ERROR');
}


}
