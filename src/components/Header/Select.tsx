import React from 'react'

interface Props {

}

const Select = (props: Props) => {
  const api: any = fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=71d4cc3b96e2310c2b89b64f623f285b')
    .then(res => res.json())
  console.log(api);

  return (
    <ul className="dropdown">
      <li className="dropdown__item dropdown__item--active">Simferopol</li>
      <li className="dropdown__item">Moscow</li>
      <li className="dropdown__item">New-York</li>
    </ul>
  )
}

export default Select

