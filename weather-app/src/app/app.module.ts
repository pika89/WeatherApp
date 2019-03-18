import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';
import {
  MatCardModule, MatIconModule, MatTooltipModule
} from '@angular/material';
import { AngularWeatherAppComponent } from './angular-weather-app/angular-weather-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCityComponent,
    CityComponent,
    AngularWeatherAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
  MatCardModule, MatIconModule, MatTooltipModule
,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
