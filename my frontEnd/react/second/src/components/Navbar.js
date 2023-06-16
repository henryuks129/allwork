import React from 'react'
import bookmark from '../assets/logo-bookmark.svg';
import hamburger from '../assets/icon-hamburger.svg';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='container navbar mt-5 nav'>
            <div className='bookmark'>
                <img src={bookmark} alt="" />
            </div>
            <div className='hamburger'>
                <img src={hamburger} alt="" />
            </div>
    </div>
  )
}

export default Navbar