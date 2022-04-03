import { getAuth, signOut } from 'firebase/auth'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { LoggedInLayout } from '../../layout/loggedInLayout'
import { app } from '../../services/firebase'

const Home: NextPage = () => {
  const router = useRouter()

  const logout = () => {
    const auth = getAuth(app)
    signOut(auth).then(() => router.push('/login'))
  }
  return (
    <LoggedInLayout>
      <div>
        <h1>Hello! Logged in!</h1>
        <button onClick={logout}>logout</button>
      </div>
    </LoggedInLayout>
  )
}

export default Home
