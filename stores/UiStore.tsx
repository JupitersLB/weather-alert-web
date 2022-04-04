import { types, Instance } from 'mobx-state-tree'

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

export const UiStore = types.model('UiStore', {
  loginForm: LoginForm,
  logoutForm: LogoutForm,
})

export const uiStore = UiStore.create({
  loginForm: LoginForm.create(),
  logoutForm: LogoutForm.create(),
})

export interface IUiStore extends Instance<typeof UiStore> {}
