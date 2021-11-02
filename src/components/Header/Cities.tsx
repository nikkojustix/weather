import React from 'react'
import City from './City'

interface Props {

}

const Cities = (props: Props) => {

  return (
    <ul className="dropdown">
      <City cityName={'Симферополь'} />
      <City cityName={'Москва'} />
      <City cityName={'Нью-Йорк'} />
    </ul>
  )
}

export default Cities

