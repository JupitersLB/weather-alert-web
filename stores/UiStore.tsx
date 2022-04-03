import { types, Instance } from 'mobx-state-tree'

export const UiStore = types.model('UiStore', {})

export const uiStore = UiStore.create()

export interface IUiStore extends Instance<typeof UiStore> {}
