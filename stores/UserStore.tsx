import axios from 'axios'
import { getAuth, signOut } from 'firebase/auth'
import { types, flow, cast, Instance } from 'mobx-state-tree'
import { app } from '../services/firebase'
import { User } from './models/User'

export const UserStore = types
  .model('UserStore', {
    user: types.optional(User, () => User.create()),
    firebaseToken: types.maybe(types.string),
    weatherAlertToken: types.maybe(
      types.model({
        id: types.string,
        value: types.string,
      })
    ),
  })
  .actions((self) => ({
    setEmail(email: string) {
      self.user.email = email
    },
    setFirebaseToken(token: string) {
      self.firebaseToken = token
    },
    setWeatherAlertToken(token: { id: string; value: string }) {
      self.weatherAlertToken = token
    },
  }))
  .actions((self) => ({
    createUser() {
      if (!self.firebaseToken) return

      return axios
        .post(
          `${process.env.NEXT_PUBLIC_WEATHER_ALERT_URL}/users`,
          {},
          { headers: { Authorization: `Bearer ${self.firebaseToken}` } }
        )
        .then((response) => {
          self.setWeatherAlertToken({
            id: response.data.token.id,
            value: response.data.token.value,
          })

          return self.weatherAlertToken
        })
    },
  }))
  .actions((self) => ({
    getWeatherAlertToken() {
      if (!self.firebaseToken) return

      return axios
        .post(
          `${process.env.NEXT_PUBLIC_WEATHER_ALERT_URL}/users/login`,
          {},
          { headers: { Authorization: `Bearer ${self.firebaseToken}` } }
        )
        .then((response) => {
          self.setWeatherAlertToken({
            id: response.data.token.id,
            value: response.data.token.value,
          })

          return self.weatherAlertToken
        })
        .catch((error) => {
          if (error?.response?.status == 404) {
            return self.createUser()
          }
        })
    },
  }))
  .actions((self) => ({
    initialize() {
      return self.getWeatherAlertToken()
    },
    signOut() {
      const auth = getAuth(app)
      return signOut(auth).then(() => {
        self.setFirebaseToken('')
        self.setWeatherAlertToken({ id: '', value: '' })
      })
    },
  }))
  .views((self) => ({
    get isLoggedIn() {
      return self.weatherAlertToken && self.weatherAlertToken.value.length > 1
    },
  }))

export const userStore = UserStore.create({
  user: User.create({
    id: '',
    name: '',
    email: '',
  }),
  firebaseToken: '',
  weatherAlertToken: {
    id: '',
    value: '',
  },
})

export interface IUserStore extends Instance<typeof UserStore> {}
