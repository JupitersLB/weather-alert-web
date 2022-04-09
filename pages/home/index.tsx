import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import { useContext } from 'react'
import { SearchBar } from '../../components/home/searchBar'
import { CurrentCard } from '../../components/weather/currentCard'
import { LoggedInLayout } from '../../layout/loggedInLayout'
import { RootStoreContext } from '../../stores/RootStore'

const Home: NextPage = observer(() => {
  const { userStore } = useContext(RootStoreContext)

  return (
    <LoggedInLayout>
      <div className="flex h-full">
        <div className="w-2/3 flex flex-col p-20">
          <SearchBar />
        </div>
        <div className="w-1/3 flex flex-col p-20">
          <CurrentCard />
        </div>
      </div>
    </LoggedInLayout>
  )
})

export default Home
