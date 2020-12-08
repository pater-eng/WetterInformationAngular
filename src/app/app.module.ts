import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherdatenComponent } from './weatherdaten/weatherdaten.component';
import {WeatherServiceService} from './Services/weather-service.service';
import { FilterPipe } from './filter.pipe';
import { SearchWeatherdataComponent } from './search-weatherdata/search-weatherdata.component';
import {WeatherdetailComponent} from './weatherdetail/weatherdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeldInputComponent } from './feld-input/feld-input.component';
import { ContactsComponent } from './contacts/contacts.component';


const appRoutes:Routes = [
  //{path:'weatherFavoriten',component:WeatherFavoritenInformationComponent},
 
  {path: 'dashboard',component:DashboardComponent},
  {path:'addweathercity',component:WeatherdatenComponent},
  {path: 'detail/:name', component: WeatherdetailComponent },
  {path: '', redirectTo:'/', pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherdatenComponent,
    FilterPipe,
    SearchWeatherdataComponent,
    WeatherdetailComponent,
    DashboardComponent,
    FeldInputComponent,
    ContactsComponent
     
    
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
