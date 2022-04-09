import { ForecastResponse } from '../types/apiResponses'

export const Transformers = {
  forecast: (data: ForecastResponse) => {
    return {
      coord: data.coord,
      weather: data.weather[0],
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      visibility: data.visibility,
      windDeg: data.wind.deg,
      windSpeed: data.wind.speed,
      clouds: data.clouds.all,
      rain: {
        oneHour: data.rain?.['1h'] || null,
        threeHours: data.rain?.['3h'] || null,
      },
      snow: {
        oneHour: data.snow?.['1h'] || null,
        threeHours: data.snow?.['3h'] || null,
      },
      timestamp: data.dt,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      timezone: data.timezone,
      city: data.name,
    }
  },
}
