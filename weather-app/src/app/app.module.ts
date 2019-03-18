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
  MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchCityComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
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
