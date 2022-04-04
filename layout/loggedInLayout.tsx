import React, { FC, useContext, useEffect } from 'react'
import { app } from '../services/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { observer } from 'mobx-react-lite'
import { RootStoreContext } from '../stores/RootStore'
import { Navbar } from './navbar'

export const LoggedInLayout: FC<{ children: any }> = observer(
  ({ children }) => {
    const { userStore } = useContext(RootStoreContext)
    const auth = getAuth(app)

    useEffect(() => {
      onAuthStateChanged(
        auth,
        (user) => {
          if (!user) {
            // router.push('/login')
            return
          }
          user
            .getIdToken()
            .then((tok) => userStore.setFirebaseToken(tok))
            .then(() => {
              return userStore.initialize()
            })
        },
        (error) => {
          // router.push('/login')
          console.log('error: ', error)
        }
      )
    })

    return (
      <div className="w-screen break-words">
        <Navbar isLoggedIn={userStore.isLoggedIn} />
        {children}
      </div>
    )
  }
)
