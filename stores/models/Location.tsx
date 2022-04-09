import { types } from 'mobx-state-tree'
import { Instance } from 'mobx-state-tree'

export const Location = types.model('Location', {
  lat: types.maybeNull(types.number),
  lon: types.maybeNull(types.number),
})

export interface ILocation extends Instance<typeof Location> {}
