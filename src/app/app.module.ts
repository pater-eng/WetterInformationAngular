import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherdatenComponent } from './weatherdaten/weatherdaten.component';
import { WeatherFavoritenInformationComponent } from './weather-favoriten-information/weather-favoriten-information.component';
import {WeatherServiceService} from './Services/weather-service.service';
import { FilterPipe } from './filter.pipe';
import { SearchWeatherdataComponent } from './search-weatherdata/search-weatherdata.component';
import {WeatherdetailComponent} from './weatherdetail/weatherdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes:Routes = [
  //{path:'weatherFavoriten',component:WeatherFavoritenInformationComponent},
 
  {path: 'dashboard',component:DashboardComponent},
  {path:'addweathercity',component:WeatherdatenComponent},
  {path: 'detail/:name', component: WeatherdetailComponent },
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherdatenComponent,
    WeatherFavoritenInformationComponent,
    FilterPipe,
    SearchWeatherdataComponent,
    WeatherdetailComponent,
    DashboardComponent
     
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
