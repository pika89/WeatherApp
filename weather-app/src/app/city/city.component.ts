import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../services/http-requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less']
})
export class CityComponent implements OnInit {
  contact: any;

  constructor(private service: HttpRequestsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCityInfo();
  }

  getCityInfo() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.service.getCity(id)
      .subscribe((response) => {
        this.contact = response;
      });
  }

}
