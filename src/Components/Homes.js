import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import NavbarSecond from './NavbarSecond'
import Backhome from './Backhome'
import Savoir from './milieu/Savoir'


const Homes = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <Logo />
        <NavbarSecond />
        <Backhome />
        <Savoir />

    </div>
  )
}

export default Homes