import React from 'react'
import Logo from './Logo'
import Cities from './Cities'
import Search from './Search'

interface Props {

}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Search />
          {/* <Cities /> */}
        </div>
      </div>
    </header>
  )
}

export default Header

