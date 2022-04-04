import { NextPage } from 'next'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { LoginForm } from '../../components/login/loginForm'

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
