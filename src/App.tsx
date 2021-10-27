import React, { createContext, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { baseUrl, apiKey } from './utils/constants'

interface Props {

}
type contextType = {
  getCity: (e: any) => void,
  data: dataType
}

type dataType = {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export const MyContext = createContext({} as contextType)


const App = (props: Props) => {
  // eslint-disable-next-line
  const [data, setData] = useState<dataType>({
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: ''
      }
    ],
    base: '',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    clouds: {
      all: 0
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: '',
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0
  })


  const getCity = (e: any) => {
    fetch(`${baseUrl}forecast?q=${e.target.textContent}&units=metric&lang=ru&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        // setData(data)
        console.log(data);
      })
  }

  return (
    <MyContext.Provider value={{ getCity, data: data }}>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </MyContext.Provider>
  )
}

export default App

