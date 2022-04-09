import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { RootStoreContext } from '../../stores/RootStore'

const SearchResultsRow: FC<{
  location: any
  handleSearchResults: (place_id: string, description: string) => void
}> = observer(({ location, handleSearchResults }) => {
  return (
    <div
      onClick={() =>
        handleSearchResults(location.place_id, location.description)
      }
      className="px-10 py-2 cursor-pointer text-grey hover:text-black hover:bg-spindle"
    >
      <p>{location.description}</p>
    </div>
  )
})

const SearchResultsContainer: FC<{
  results: any
  handleSearchResults: (place_id: string, description: string) => void
}> = observer(({ results, handleSearchResults }) => {
  return (
    <div className="border-t divide-y">
      {results.data.predictions &&
        results.data.predictions.map((r: any) => (
          <SearchResultsRow
            key={r.place_id}
            location={r}
            handleSearchResults={handleSearchResults}
          />
        ))}
    </div>
  )
})

export const SearchBar: FC = observer(() => {
  const { uiStore } = useContext(RootStoreContext)
  const [query, setQuery] = useState<string | undefined>(undefined)

  const { isLoading, data } = useQuery<any>(`location.query.${query}`, () => {
    return axios.post('/api/autocomplete', {
      query: query,
    })
  })

  const handleSearchResults = (placeId: string, description: string) => {
    const url = `${process.env.NEXT_PUBLIC_WEATHER_ALERT_URL}/forecast?place_id=${placeId}`
    setQuery(description)
    uiStore.setShowPredictions(false)
    axios.get(url).then(({ data }) => {
      uiStore.setCurrentWeather(data)
    })
  }

  return (
    <div className="min-h-32px flex flex-col mb-2 bg-white border border-silver rounded-lg">
      <div className="flex h-16 px-10 items-center justify-between">
        <input
          value={query}
          className="focus:outline-none w-full h-full"
          type="text"
          placeholder="Enter a city"
          onChange={(e) => {
            setQuery(e.currentTarget.value)
            if (!uiStore.searchBar.showPredictions) {
              uiStore.setShowPredictions(true)
            }
          }}
        />
        <img src={'/static/assets/search-icon.svg'} alt="search icon" />
      </div>
      {data && query && uiStore.searchBar.showPredictions && (
        <SearchResultsContainer
          results={data}
          handleSearchResults={handleSearchResults}
        />
      )}
    </div>
  )
})
