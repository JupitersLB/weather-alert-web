import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import { useContext } from 'react'
import { SearchBar } from '../../components/home/searchBar'
import { LoggedInLayout } from '../../layout/loggedInLayout'
import { RootStoreContext } from '../../stores/RootStore'

const Home: NextPage = observer(() => {
  const { userStore } = useContext(RootStoreContext)

  return (
    <LoggedInLayout>
      <div className="w-2/3">
        <div className="flex flex-col p-20">
          <SearchBar />
        </div>
      </div>
    </LoggedInLayout>
  )
})

export default Home
