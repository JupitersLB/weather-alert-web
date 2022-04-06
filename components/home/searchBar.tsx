import { observer } from 'mobx-react-lite'
import React, { FC, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const SearchResultsRow: FC<{
  location: any
  handleSearchResults: (place_id: string) => void
}> = observer(({ location, handleSearchResults }) => {
  return (
    <div
      onClick={() => handleSearchResults(location.place_id)}
      className="px-10 py-2 cursor-pointer text-grey hover:text-black hover:bg-spindle"
    >
      <p>{location.description}</p>
    </div>
  )
})

const SearchResultsContainer: FC<{
  results: any
  handleSearchResults: (place_id: string) => void
}> = observer(({ results, handleSearchResults }) => {
  console.log('results: ', results.data.predictions)

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
  const [query, setQuery] = useState<string | null>(null)
  const { register } = useForm()

  const { isLoading, data } = useQuery<any>(`location.query.${query}`, () => {
    return axios.post('/api/autocomplete', {
      query: query,
    })
  })

  const handleSearchResults = (place_id: string) => {}

  return (
    <div className="min-h-32px flex flex-col mb-2 bg-white border border-silver rounded-lg">
      <div className="flex h-16 px-10 items-center justify-between">
        <input
          className="focus:outline-none w-full h-full"
          type="text"
          placeholder="Enter a city"
          {...(register('searchInput'),
          {
            onChange: (e) => setQuery(e.currentTarget.value),
          })}
        />
        <img src={'/static/assets/search-icon.svg'} alt="search icon" />
      </div>
      {data && query && (
        <SearchResultsContainer
          results={data}
          handleSearchResults={handleSearchResults}
        />
      )}
    </div>
  )
})
