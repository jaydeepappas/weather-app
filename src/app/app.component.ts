import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather.api.service';
import { DATA } from './typings/static.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-weather';

  public response: WeatherResponse;
  public responseKeys = DATA.Response.FilteredKeys;
  public responseReceived = false;
  public location: string;
  constructor(private api: WeatherApiService) { }

  getJSONResponse(): void {
    this.api.requestJSONData().subscribe((response) => {
      this.location = this.api.location;
      this.response = response;
      this.responseReceived = true;

      const sanitizeJSONResponse = (response) => {
        Object.keys(response).forEach((key) => {
          DATA.Response.FilteredKeys.includes(key) ? this.response[key] = response[key] : delete this.response[key]
        });

        this.response['weather'] = response['weather'][0];
      };
      console.log(sanitizeJSONResponse(this.response));
    });
  }
}


