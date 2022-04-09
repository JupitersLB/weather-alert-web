import { types, Instance } from 'mobx-state-tree'
import { Transformers } from '../services/weatherAlertApi'
import { ForecastResponse } from '../types/apiResponses'
import { Forecast } from './models/Forecast'

const LoginForm = types
  .model('LoginForm', {
    loginFormVisible: false,
    isLoading: false,
  })
  .actions((self) => ({
    setLoginVisible(isVisible: boolean) {
      self.loginFormVisible = isVisible
    },
    setIsLoading(isLoading: boolean) {
      self.isLoading = isLoading
    },
  }))

const LogoutForm = types
  .model('LogoutForm', {
    logoutFormVisible: false,
    isLoading: false,
  })
  .actions((self) => ({
    setLogoutVisible(isVisible: boolean) {
      self.logoutFormVisible = isVisible
    },
    setIsLoading(isLoading: boolean) {
      self.isLoading = isLoading
    },
  }))

export const UiStore = types
  .model('UiStore', {
    loginForm: LoginForm,
    logoutForm: LogoutForm,
    searchBar: types.model({
      showPredictions: true,
    }),
    currentWeather: types.maybeNull(Forecast),
  })
  .actions((self) => ({
    setCurrentWeather(data: ForecastResponse) {
      self.currentWeather = Transformers.forecast(data)
    },
    setShowPredictions(show: boolean) {
      self.searchBar.showPredictions = show
    },
  }))

export const uiStore = UiStore.create({
  loginForm: LoginForm.create(),
  logoutForm: LogoutForm.create(),
  searchBar: { showPredictions: false },
})

export interface IUiStore extends Instance<typeof UiStore> {}
