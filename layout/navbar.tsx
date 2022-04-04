import { observer } from 'mobx-react-lite'
import React, { FC, useContext } from 'react'
import { JLBModal } from '../components/jlbModal'
import { LoginForm } from '../components/login/loginForm'
import { LogoutForm } from '../components/logout/logoutForm'
import { RootStoreContext } from '../stores/RootStore'

export const Navbar: FC<{ isLoggedIn?: boolean }> = observer(
  ({ isLoggedIn }) => {
    const { uiStore } = useContext(RootStoreContext)

    return (
      <>
        <div className="flex justify-between h-12 items-center bg-red-100 px-8 z-0">
          <div>logo</div>
          <div className="flex w-1/4 justify-between">
            <div>about</div>
            {isLoggedIn ? (
              <>
                <div onClick={() => uiStore.logoutForm.setLogoutVisible(true)}>
                  logout
                </div>
                <div>profile</div>
              </>
            ) : (
              <div onClick={() => uiStore.loginForm.setLoginVisible(true)}>
                login
              </div>
            )}
          </div>
        </div>
        <JLBModal
          title="Login Form"
          showModal={uiStore.loginForm.loginFormVisible}
          setShowModal={uiStore.loginForm.setLoginVisible}
        >
          <LoginForm />
        </JLBModal>
        <JLBModal
          title="Are You Sure?"
          showModal={uiStore.logoutForm.logoutFormVisible}
          setShowModal={uiStore.logoutForm.setLogoutVisible}
        >
          <LogoutForm />
        </JLBModal>
      </>
    )
  }
)
