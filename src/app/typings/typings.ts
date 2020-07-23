interface WeatherResponse {
  weather: WeatherData;
  main: MainData;
  wind: WindData;
}

interface WeatherData {
  feels_like: number,
  humidity: number,
  pressure: number,
  temp_max: number,
  temp_min: number
}

interface MainData {
  description: string,
  icon: string,
  id: number,
  main: string
}

interface WindData {
  deg: number,
  gust: number,
  speed: number
}

