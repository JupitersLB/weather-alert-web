import { types } from 'mobx-state-tree'
import { Instance } from 'mobx-state-tree'

export const User = types.model('User', {
  id: types.identifier,
  name: types.maybeNull(types.string),
  email: types.string,
})

export interface IUser extends Instance<typeof User> {}
