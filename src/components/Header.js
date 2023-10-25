import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderLogoContainer from './HeaderLogoContainer'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <header>
        <HeaderLeft />
        <HeaderLogoContainer />
        <HeaderRight />
    </header>
  )
}

export default Header