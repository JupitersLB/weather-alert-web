import React, { FC, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { JLBButton } from '../jlbButton'
import { uiStore } from '../../stores/UiStore'
import { RootStoreContext } from '../../stores/RootStore'

export const LogoutForm: FC = observer(() => {
  const { userStore, uiStore } = useContext(RootStoreContext)

  const logout = () => {
    userStore.signOut().then(() => uiStore.logoutForm.setLogoutVisible(false))
  }

  return (
    <div className="flex flex-row gap-x-4 items-center w-full p-8">
      <JLBButton
        disabled={uiStore.logoutForm.isLoading}
        className="bg-red-200 hover:bg-red-300 text-black hover:text-white hover:border-white border border-red-400 w-24 mt-4 text-center"
        onClick={() => uiStore.logoutForm.setLogoutVisible(false)}
      >
        <p className="w-full ">Cancel</p>
      </JLBButton>
      <JLBButton
        disabled={uiStore.logoutForm.isLoading}
        className="bg-violet-500 text-white hover:bg-violet-700 w-32 mt-4 text-center"
        onClick={logout}
      >
        <p className="flex w-full justify-center">Yes</p>
      </JLBButton>
    </div>
  )
})
