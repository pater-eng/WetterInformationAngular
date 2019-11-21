import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../Services/weather-service.service'
import {Weatherdata} from '../weather';
import { Observable, Subject } from 'rxjs';
import { switchMap , debounceTime, distinctUntilChanged} from "rxjs/operators" 
@Component({
  selector: 'app-search-weatherdata',
  templateUrl: './search-weatherdata.component.html',
  styleUrls: ['./search-weatherdata.component.css']
})
export class SearchWeatherdataComponent implements OnInit {

  
  weather$: Observable<Weatherdata[]>;
  private searchTerms = new Subject<string>();

  constructor(private weatherService: WeatherServiceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.weather$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.weatherService.searchHeroes(term)),
    );
  }

}
