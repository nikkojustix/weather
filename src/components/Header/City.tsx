import React, { useContext } from 'react'
import { MyContext } from '../../App'


interface Props {
  cityName: string
}

const City = ({ cityName }: Props) => {
  const { getCity } = useContext(MyContext)

  return (
    <li className="dropdown__item" onClick={getCity}>{cityName}</li>
  )
}

export default City