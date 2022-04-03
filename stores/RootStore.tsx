import { types } from 'mobx-state-tree'
import React, { createContext } from 'react'
import { UiStore, uiStore } from './UiStore'
import { userStore, UserStore } from './UserStore'

export const RootStore = types.model('RootStore', {
  userStore: UserStore,
  uiStore: UiStore,
})

export const rootStore = RootStore.create({
  userStore: userStore,
  uiStore: uiStore,
})

export const RootStoreContext = createContext(rootStore)

export default RootStore
