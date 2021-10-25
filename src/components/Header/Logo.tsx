import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'


interface Props {

}

const Logo = (props: Props) => {
  return (
    <div className="header__logo">
      <GlobalSvgSelector id="logo" />
    </div>
  )
}

export default Logo

