import React, { useContext } from 'react'
import { MyContext } from '../../App'
// import { baseUrl, key } from '../../utils/constants'


interface Props {
  cityName: string
}

const City = ({ cityName }: Props) => {
  // const getCity = (e: any) => {
  //   fetch(`${baseUrl}?q=${e.target.textContent}&units=metric&appid=${key}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data.name))
  // }


  const { getCity } = useContext(MyContext)

  return (
    <li className="dropdown__item" onClick={getCity}>{cityName}</li>
  )
}

export default City