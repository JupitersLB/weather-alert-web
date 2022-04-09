import { observer } from 'mobx-react-lite'
import react, { FC, useContext } from 'react'
import { RootStoreContext } from '../../stores/RootStore'

export const CurrentCard: FC<{}> = observer(() => {
  const { uiStore } = useContext(RootStoreContext)
  return (
    <div className="flex flex-col items-center justify-center bg-red-300 w-full h-full">
      <h1>Today</h1>
      <p>{uiStore.currentWeather?.temp}</p>
      <p>{uiStore.currentWeather?.feelsLike}</p>
      <p>{uiStore.currentWeather?.maxTemp}</p>
      <p>{uiStore.currentWeather?.minTemp}</p>
      <p>{uiStore.currentWeather?.pressure}</p>
      <p>{uiStore.currentWeather?.humidity}</p>
      <p>{uiStore.currentWeather?.clouds}</p>
      <p>
        {uiStore.currentWeather?.city}, {uiStore.currentWeather?.country}
      </p>
      <p>{uiStore.currentWeather?.sunrise}</p>
      <p>{uiStore.currentWeather?.sunset}</p>
      <p>{uiStore.currentWeather?.weather.main}</p>
      <p>{uiStore.currentWeather?.weather.description}</p>
      <p>{uiStore.currentWeather?.visibility}</p>
      <p>{uiStore.currentWeather?.windDeg}</p>
      <p>{uiStore.currentWeather?.windSpeed}</p>
    </div>
  )
})
