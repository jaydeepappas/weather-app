import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  location: string = 'Houston';
  apiKey: string = '715730d57250f54995a453c19ca8a20a';
  api: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  requestJSONData(): Observable<any> {
    return this.http.get(this.api);
  }
}
