export const DATA = {
  Request: {
    Endpoint: 'https://api.openweathermap.org/data/2.5/weather'
  },
  Response: {
    FilteredKeys: [
      'main',
      'weather',
      'wind',
    ],
    SanitizedKeys: {
      Weather: 'weather'
    }
  }
};
