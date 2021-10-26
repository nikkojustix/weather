import React from 'react'
import City from './City'

interface Props {

}

const Cities = (props: Props) => {

  return (
    <ul className="dropdown">
      <City cityName={'Simferopol'} />
      <City cityName={'Moscow'} />
      <City cityName={'New York'} />
    </ul>
  )
}

export default Cities

