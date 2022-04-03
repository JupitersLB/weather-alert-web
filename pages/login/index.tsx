import { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { app } from '../../services/firebase'
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth'
import { RootStoreContext } from '../../stores/RootStore'
import { observer } from 'mobx-react-lite'

const LoginForm: React.FC = observer(() => {
  const { userStore } = useContext(RootStoreContext)
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
    url: 'http://localhost:3000/login',
    handleCodeInApp: true,
  }

  const onSubmit = (data: { email: string }) => {
    sendSignInLinkToEmail(auth, data.email, actionCodeSettings)
      .then((r) => {
        window.localStorage.setItem('emailForSignIn', data.email)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  }

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-4xl text-white mb-10 font-semibold">LOGIN</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        ></input>
        <button
          type="submit"
          className="w-full mt-12 font-regular tracking-wide bg-gray-200"
        >
          LOGIN
        </button>
      </form>
    </div>
  )
})

const Login: NextPage = observer(() => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center mt-20">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  )
})

export default Login
