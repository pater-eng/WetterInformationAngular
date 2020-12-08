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


  ngOnInit(): void {
  
  }
 }
