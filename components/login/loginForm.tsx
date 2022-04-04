import React, { useEffect, FC } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { app } from '../../services/firebase'
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth'
import { observer } from 'mobx-react-lite'
import { JLBButton } from '../jlbButton'
import { uiStore } from '../../stores/UiStore'
import { toast } from 'react-toastify'

export const LoginForm: FC = observer(() => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const auth = getAuth(app)

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((res) => {
            window.localStorage.removeItem('emailForSignIn')
            router.push('/')
          })
          .catch((error) => {
            console.log('sign in link error: ', error)
          })
      }
    }
  })

  const actionCodeSettings = {
    url: 'http://localhost:3005/login',
    handleCodeInApp: true,
  }

  const onSubmit = (data: { email: string }) => {
    sendSignInLinkToEmail(auth, data.email, actionCodeSettings)
      .then((r) => {
        uiStore.loginForm.setIsLoading(true)
        toast.success('Check your email for a link to log in')
        window.localStorage.setItem('emailForSignIn', data.email)
      })
      .catch((error) => {
        toast.error('Oops, there has been an issue. Contact support.')
        console.log('error: ', error)
      })
      .finally(() => uiStore.loginForm.setIsLoading(false))
  }

  return (
    <div className="flex flex-col items-center w-full p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md p-2"
          {...register('email', { required: true })}
        />
        <JLBButton
          disabled={uiStore.loginForm.isLoading}
          className="bg-violet-500 w-full mt-4 text-center"
        >
          <p className="w-full text-white">Login</p>
        </JLBButton>
      </form>
    </div>
  )
})
