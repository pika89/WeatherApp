import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpRequestsService } from '../services/http-requests.service';
import { City } from 'src/assets/city';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.less']
})
export class SearchCityComponent implements OnInit {
  private searchTerms = new Subject<string>();
  city$: Observable<City[]>;
  @ViewChild('searchBox')
  private searchBox: ElementRef;

  constructor(private service: HttpRequestsService) { }

  ngOnInit() {
    this.city$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.service.locationSearch(term)),
    );
  }

  searchCity(term: string): void {
    this.searchTerms.next(term);
  }

}
