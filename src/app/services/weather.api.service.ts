import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '/mnt/c/Code/Keys/open-weather-api-key'
import { DATA } from '../typings/static.data';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  location: string = 'Houston';

  constructor(private http: HttpClient) { }

  requestJSONData(): Observable<any> {
    return this.http.get(
      this.createRequest(this.location)
    );
  }

  createRequest(location: string): string {
    return `${DATA.Request.Endpoint}?q=${location}&appid=${API_KEY}`
  }
}
