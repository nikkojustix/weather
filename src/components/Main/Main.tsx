import React, { useContext } from 'react'
import { MyContext } from '../../App'

interface Props {

}

const Main = (props: Props) => {
  const { data } = useContext(MyContext)

  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <h2 className="main__city">{data.name}</h2>
          <div className="card">

            <div className="weather">{data.weather[0].description}</div>
            <div className="temperature">Outside temp: {data.main.temp}</div>
            <div className="wind">wind speed: {data.wind.speed}</div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
