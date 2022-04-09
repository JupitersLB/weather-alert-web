interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface ForecastResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: Weather[]
  main: {
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  rain?: {
    '1h': number
    '3h': number
  }
  snow?: {
    '1h': number
    '3h': number
  }
  dt: number
  id: number
  name: string
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
}
