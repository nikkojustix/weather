import React from 'react'

interface Props {

}

const Select = (props: Props) => {


  return (
    <div className="dropdown">
      <div className="dropdown__current"></div>
      <ul className="dropdown__list">
        <li className="dropdown__item">Simferopol</li>
        <li className="dropdown__item">Moscow</li>
        <li className="dropdown__item">New-York</li>
      </ul>
    </div>
  )
}

export default Select

