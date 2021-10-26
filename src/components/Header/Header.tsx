import React from 'react'
import Logo from './Logo'
import Cities from './Cities'

interface Props {

}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Cities />
        </div>
      </div>
    </div>
  )
}

export default Header

