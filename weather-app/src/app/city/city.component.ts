import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../services/http-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City, CityInfo } from 'src/assets/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less']
})
export class CityComponent implements OnInit {
  city = new City();
  cityInfo: CityInfo[] = [];

  constructor(private service: HttpRequestsService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCityInfo();
  }

  getCityInfo() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.service.getCity(id)
      .subscribe((response) => {
        this.city = response;
        this.cityInfo = response.consolidated_weather;
      });
  }

}
