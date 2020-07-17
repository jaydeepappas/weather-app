import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { DATA } from './typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-weather';

  public response: {};
  public responseKeys = DATA.Response.FilteredKeys;
  public responseReceived = false;

  constructor(private api: WeatherDataService) { }

  getJSONResponse(): Object {
    this.api.requestJSONData().subscribe((response) => {
      this.response = response;
      this.responseReceived = true;

      const sanitizeJSONResponse = (response) => {
        Object.keys(response).forEach((key) => {
          DATA.Response.FilteredKeys.includes(key) ? this.response[key] = response[key] : delete this.response[key]
        });

        this.response[DATA.Response.SanitizedKeys.Weather] = response[DATA.Response.SanitizedKeys.Weather][0];
      };

      console.log(sanitizeJSONResponse(this.response));
    });

    return this.response;
  }
}


