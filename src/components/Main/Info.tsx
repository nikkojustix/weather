import React, { useContext } from 'react'
import { MyContext } from '../../App'

interface Props {

}

const Info = (props: Props) => {
  const { data } = useContext(MyContext)
  return (
    <div className="main__info info">
      <div className="info__temperature">Температура {Math.round(data.main.temp)}<sup>o</sup>C - ощущается как {Math.round(data.main.feels_like)}<sup>o</sup>C</div>
      <div className="info__pressure">Давление {Math.round(data.main.pressure * 0.75)} мм ртутного столба</div>
      <div className="info__descr">Осадки {data.weather[0].description}</div>
      <div className="info__wind">Ветер {Math.round(data.wind.speed)} м/с </div>

    </div>
  )
}

export default Info
