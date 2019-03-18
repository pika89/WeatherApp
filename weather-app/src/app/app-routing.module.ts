import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCityComponent } from './search-city/search-city.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path: '', component: SearchCityComponent},
  {path: 'search/:city/:id', component: CityComponent},
  { path: '**', component: SearchCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
