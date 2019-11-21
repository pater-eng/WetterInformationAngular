import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherdatenComponent } from './weatherdaten/weatherdaten.component';
import { WeatherCityInformationComponent } from './weather-city-information/weather-city-information.component';
import { WeatherFavoritenInformationComponent } from './weather-favoriten-information/weather-favoriten-information.component';
import {WeatherServiceService} from './Services/weather-service.service';
import { FilterPipe } from './filter.pipe';
import { SearchWeatherdataComponent } from './search-weatherdata/search-weatherdata.component';
import {WeatherdetailComponent} from './weatherdetail/weatherdetail.component';


const appRoutes:Routes = [
  {path:'searchweathercity',component:WeatherdatenComponent},
  //{path:'weatherFavoriten',component:WeatherFavoritenInformationComponent},
//  {path:'weathercityInfo/:name', component:WeatherCityInformationComponent},
  {path: 'detail/:name', component: WeatherdetailComponent },
  {path: '',
    redirectTo:'/searchweathercity',
    pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherdatenComponent,
    WeatherCityInformationComponent,
    WeatherFavoritenInformationComponent,
    FilterPipe,
    SearchWeatherdataComponent,
    WeatherdetailComponent
     
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
