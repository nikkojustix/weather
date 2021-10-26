import React from 'react'

interface Props {
  cityName: string
}

const City = (props: Props) => {
  const getCity = (e: any) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + e.target.textContent + '&units=metric&appid=71d4cc3b96e2310c2b89b64f623f285b')
      .then(res => res.json())
      .then(data => console.log(data.name))
  }

  return (
    <li className="dropdown__item" onClick={getCity}>{props.cityName}</li>
  )
}

export default City
