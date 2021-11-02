import React, { useContext } from 'react'
import { MyContext } from '../../App'


interface Props {
  cityName: string
}

const City = ({ cityName }: Props) => {
  const { getData } = useContext(MyContext)

  return (
    <li className="dropdown__item" onClick={getData}>{cityName}</li>
  )
}

export default City