import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherdatenComponent } from './weatherdaten/weatherdaten.component';
import { WeatherCityInformationComponent } from './weather-city-information/weather-city-information.component';
import { WeatherFavoritenInformationComponent } from './weather-favoriten-information/weather-favoriten-information.component';
import {WeatherServiceService} from './Services/weather-service.service';

const appRoutes:Routes = [
  {path:'weather',component:WeatherdatenComponent},
  {path:'weatherFavoriten',component:WeatherFavoritenInformationComponent},
  {path:'cityInfo', component:WeatherCityInformationComponent},
  {path: '',
    redirectTo:'/weather',
    pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherdatenComponent,
    WeatherCityInformationComponent,
    WeatherFavoritenInformationComponent
     
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
