import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { API_KEY } from '/mnt/c/Code/Keys/open-weather-api-key'
import { DATA } from '../typings/static.data';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  location = 'Houston';
  icon: string;

  constructor(private http: HttpClient) { }

  requestWeatherData(): Observable<any> {
    return this.http.get(
      this.createRequest(DATA.Request.Type.Data, DATA.Request.Endpoints.DataEndpoint, this.location)
    );
  }

  requestWeatherIcon(icon: string): Observable<Blob> {
    return this.http.get(
      this.createRequest(DATA.Request.Type.Icon, DATA.Request.Endpoints.IconEndpoint, icon),
      { responseType: 'blob' }
    );
  }

  createRequest(type, endpoint: string, param: string) {
    if (type === DATA.Request.Type.Data) {
      console.log(`${endpoint}?q=${param}&appid=${API_KEY}`);
      return `${endpoint}?q=${param}&appid=${API_KEY}`;

    } else if (type === DATA.Request.Type.Icon) {
      console.log(`${endpoint}${param}.png`);
      return `${endpoint}/${param}.png`;
    }
    throw new Error('invalid http request');
  }
}
