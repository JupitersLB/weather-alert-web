import { types } from 'mobx-state-tree'
import { Instance } from 'mobx-state-tree'

export const Weather = types.model('Weather', {
  id: types.number,
  main: types.string,
  description: types.string,
  icon: types.string,
})

export interface IWeather extends Instance<typeof Weather> {}
