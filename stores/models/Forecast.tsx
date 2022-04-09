import { types } from 'mobx-state-tree'
import { Instance } from 'mobx-state-tree'
import { Location } from './Location'
import { Weather } from './Weather'

export const Forecast = types.model('Forecast', {
  coord: Location,
  weather: Weather,
  temp: types.number,
  feelsLike: types.number,
  pressure: types.number,
  humidity: types.number,
  minTemp: types.number,
  maxTemp: types.number,
  visibility: types.number,
  windDeg: types.number,
  windSpeed: types.number,
  clouds: types.number,
  rain: types.maybeNull(
    types.model({
      oneHour: types.maybeNull(types.number),
      threeHours: types.maybeNull(types.number),
    })
  ),
  snow: types.maybeNull(
    types.model({
      oneHour: types.maybeNull(types.number),
      threeHours: types.maybeNull(types.number),
    })
  ),
  timestamp: types.number,
  country: types.string,
  sunrise: types.number,
  sunset: types.number,
  timezone: types.number,
  city: types.string,
})

export interface IForecast extends Instance<typeof Forecast> {}
