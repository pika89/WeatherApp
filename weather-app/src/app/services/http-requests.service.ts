import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { City } from 'src/assets/city';
import { map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location';
 

  constructor(private http: HttpClient) { }

  locationSearch(query: string): Observable<City[]> {
    if (!query.trim()) {
      return of([]);
    }
    return this.http.get<City[]>(`${this.apiUrl}/search/?query=${query}`).pipe(
    );
  }

  getCity(id: number): Observable<City> {
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.get<City>(url).pipe(map((response) => {
      if (response == null) {
        return null;
      }
      return response;
    }),
      retry(3), // retry a failed request up to 3 times
    );
    return result;
  }
}
