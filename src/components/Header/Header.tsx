import React from 'react'
import Logo from './Logo'
import Select from './Select'

interface Props {

}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Select />
        </div>
      </div>
    </div>
  )
}

export default Header

