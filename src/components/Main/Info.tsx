import React, { useContext } from 'react'
import { MyContext } from '../../App'
import windDirection from '../../utils/windDirection'

interface Props {

}

const Info = (props: Props) => {
  const { data } = useContext(MyContext)
  return (
    <div className="main__col info">
      <ul className="info__list">
        <li className="info__item">
          <div className="info__item-name">Температура</div>
          <div className="info__item-content">{Math.round(data.main.temp)}<sup>o</sup> - ощущается как {Math.round(data.main.feels_like)}<sup>o</sup></div>
        </li>
        <li className="info__item">
          <div className="info__item-name">Давление</div>
          <div className="info__item-content">{Math.round(data.main.pressure * 0.75)} мм ртутного столба</div>
        </li>
        <li className="info__item">
          <div className="info__item-name">Влажность</div>
          <div className="info__item-content">{data.main.humidity}%</div>
        </li>
        <li className="info__item">
          <div className="info__item-name">Ветер</div>
          <div className="info__item-content">{Math.round(data.wind.speed)} м/с {windDirection(data.wind.deg)}</div>
        </li>
      </ul>
    </div>
  )
}

export default Info
