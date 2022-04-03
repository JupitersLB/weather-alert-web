import React, { FC, useContext, useEffect, useLayoutEffect } from 'react'
import { app } from '../services/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { RootStoreContext } from '../stores/RootStore'

export const LoggedInLayout: FC<{ children: any }> = observer(
  ({ children }) => {
    const { userStore } = useContext(RootStoreContext)
    const router = useRouter()
    const auth = getAuth(app)

    useEffect(() => {
      onAuthStateChanged(
        auth,
        (user) => {
          if (!user) {
            router.push('/login')
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
          router.push('/login')
        }
      )
    })

    return children
  }
)
