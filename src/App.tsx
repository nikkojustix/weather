import React, { createContext, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { baseUrl, key } from './utils/constants'

interface Props {

}
type contextType = {
  getCity: (e: any) => void
}

export const MyContext = createContext({} as contextType)


const App = (props: Props) => {

  const [city, setCity] = useState('Simferopol')
  // const [temp, setTemp] = useState('Simferopol')


  const getCity = (e: any) => {
    fetch(`${baseUrl}?q=${e.target.textContent}&units=metric&appid=${key}`)
      .then(res => res.json())
      .then(data => {
        setCity(data.name)
      })
  }

  return (
    <MyContext.Provider value={{ getCity }}>
      <div className="wrapper">
        <Header />
        <Main city={city} />
      </div>
    </MyContext.Provider>
  )
}

export default App

