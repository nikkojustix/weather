import React, { useContext } from 'react'
import { MyContext } from '../../App'


interface Props {

}

const Current = (props: Props) => {
  const { data } = useContext(MyContext)
  const iconUrl: string = `images/${data.weather[0].icon}.png`

  return (
    <div className="main__col current">

      <h2 className="current__title">{data.name}</h2>
      <div className="current__content">
        <div className="current__temperature">{Math.round(data.main.temp)}<sup>o</sup></div>
        <img className="current__icon" src={iconUrl} alt="" />
      </div>

    </div>
  )
}

export default Current
