import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo_light.png'
import logo_dark from '../../assets/logo_dark.png'
import day from '../../assets/day.png'
import night from '../../assets/night.png'

const Navbar = ({theme, setTheme}) => {

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_dark : logo_light} alt="" className='logo' />
        <ul className='nav-list'>
            <li>Home</li>
            <li>Github</li>
            <li>LinkedIn</li>
        </ul>

        <img src={theme == 'light' ? night : day} alt="" className='toggle-icon' onClick={() => {toggleTheme()}} />
    </div>
  )
}

export default Navbar