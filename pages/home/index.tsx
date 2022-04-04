import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import { useContext } from 'react'
import { LoggedInLayout } from '../../layout/loggedInLayout'
import { RootStoreContext } from '../../stores/RootStore'

const Home: NextPage = observer(() => {
  const { userStore } = useContext(RootStoreContext)

  return (
    <LoggedInLayout>
      <div className="flex flex-col divide-y-8 p-20">
        <p>firebase {userStore.firebaseToken}</p>
        <p>weather id {userStore.weatherAlertToken?.id}</p>
        <p>weather value {userStore.weatherAlertToken?.value}</p>
      </div>
    </LoggedInLayout>
  )
})

export default Home
