import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather.api.service';
import { DATA } from './typings/static.data';

export let f = () => {

};

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
  public location: string;
  weatherIcon: any;
  isImageLoading = true;
  iconCode: string;

  constructor(private api: WeatherApiService) { }
  f = this.getJSONResponse();

  getJSONResponse(): void {
    this.api.requestWeatherData().subscribe((response) =>  {
      this.location = this.api.location;
      this.response = response;
      this.responseReceived = true;

      const sanitizeJSONResponse = () => {
        Object.keys(this.response).forEach((key) => {
          if (!DATA.Response.FilteredKeys.includes(key)) {
            delete this.response[key];
          }
        });
      };
      sanitizeJSONResponse();

      this.response[DATA.Response.SanitizedKeys.Weather] = this.response[DATA.Response.SanitizedKeys.Weather][0];
      this.iconCode = this.response[DATA.Response.SanitizedKeys.Weather].icon;

      this.api.requestWeatherIcon(this.iconCode).subscribe((blob) => {
        this.createImageFromBlob(blob);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.weatherIcon = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
