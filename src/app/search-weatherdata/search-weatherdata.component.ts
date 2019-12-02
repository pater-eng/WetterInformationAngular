import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service'
import { Weatherdata } from '../weather';
import { Observable, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators"
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-search-weatherdata',
  templateUrl: './search-weatherdata.component.html',
  styleUrls: ['./search-weatherdata.component.css']
})
export class SearchWeatherdataComponent implements OnInit {


  weather$: Observable<Weatherdata[]>;
  @Input() weather: Weatherdata;
  private searchTerms = new Subject<string>();

  constructor(private weatherService: WeatherServiceService, 
    private router: Router, private activedRoute: ActivatedRoute) { }

  // Push a search term into the observable stream.
  search(name: string): void {
    this.searchTerms.next(name);
  }


  getCity(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.weatherService.getCity(name)
      .subscribe(weather => {
        this.weather = weather;
        this.router.navigate(['/detail/' + weather.name]);
      });
  }
  ngOnInit(): void {

    this.weather$ = this.searchTerms.pipe(
      // wait 3000ms after each keystroke before considering the term
      debounceTime(3000),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((name: string) => this.weatherService.saveWeatherdata(name)),
    );
  }

}
