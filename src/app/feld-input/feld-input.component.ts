import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weatherdata } from '../weather';
import { Observable, Subject } from 'rxjs';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import {WeatherServiceService} from '../Services/weather-service.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators"


@Component({
  selector: 'app-feld-input',
  templateUrl: './feld-input.component.html',
  styleUrls: ['./feld-input.component.css']
})
export class FeldInputComponent implements OnInit {
 
   @Input() weather: Weatherdata;
   private weather$: Observable<Weatherdata[]>;
   private searchTerms = new Subject<string>();

   constructor(private _weatherService: WeatherServiceService, 
    private router: Router, private activedRoute: ActivatedRoute) { }
   

    getCity(name: string): void {
       name = name.trim();
       if (!name) { return; }
       this._weatherService.getCity(name)
         .subscribe(weather => {
           this.weather = weather;
           this.router.navigate(['/detail/' + weather.name]);
         });
     }

   ngOnInit() {
    this.weather$ = this.searchTerms.pipe(
      // wait 3000ms after each keystroke before considering the term
      debounceTime(3000),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((name: string) => this._weatherService.getWeatherCity(name)),
    );
    }
  // Push a search term into the observable stream.
  search(name: string): void {
    this.searchTerms.next(name);
  }
        
}
