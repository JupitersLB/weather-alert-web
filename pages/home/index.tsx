import { getAuth, signOut } from 'firebase/auth'
import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { LoggedInLayout } from '../../layout/loggedInLayout'
import { app } from '../../services/firebase'
import { RootStoreContext } from '../../stores/RootStore'

const Home: NextPage = observer(() => {
  const { userStore } = useContext(RootStoreContext)
  const router = useRouter()
  const auth = getAuth(app)

  const logout = () => {
    signOut(auth).then(() => router.push('/login'))
  }

  console.log('token: ', userStore.firebaseToken)

  return (
    <LoggedInLayout>
      <div>
        <h1>Hello! Logged in!</h1>
        <p>firebase {userStore.firebaseToken}</p>
        <p>weather id {userStore.weatherAlertToken?.id}</p>
        <p>weather value {userStore.weatherAlertToken?.value}</p>
        <button onClick={logout}>logout</button>
      </div>
    </LoggedInLayout>
  )
})

export default Home
