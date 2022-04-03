import React, { FC, useContext, useEffect, useLayoutEffect } from 'react'
import { app } from '../services/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { useRouter } from 'next/router'

export const LoggedInLayout: FC<{}> = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const auth = getAuth(app)

    onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          router.push('/login')
          return
        }
      },
      (error) => {
        router.push('/login')
      }
    )
  })

  return children
}
