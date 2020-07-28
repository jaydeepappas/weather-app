export const DATA = {
  Request: {
    Endpoints: {
      DataEndpoint: 'https://api.openweathermap.org/data/2.5/weather',
      IconEndpoint: 'http://openweathermap.org/img/w/'
    },
    Type: {
      Data: 'data',
      Icon: 'icon'
    }
  },
  Response: {
    FilteredKeys: [
      'main',
      'weather',
      'wind'
    ],
    SanitizedKeys: {
      Weather: 'weather'
    }
  }
};
