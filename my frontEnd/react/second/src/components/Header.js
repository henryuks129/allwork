import React from 'react'
import hero1 from '../assets/illustration-hero (1).svg'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='hero'>
        <div className='inner-hero'>
        <div className='background'>
            </div>
            <div className='hero-image'>
                <img src={hero1} alt="" />
        </div>
        </div>
        <div className='container illustration'>
            <h2>A Simple Bookmark Manager</h2>
            <p>A clean and simple interface to orgenize your favourite websites. Open a new browser tab and see your sites load instantly. Try for free.</p>
            <div className='btns container-fluid'>
               <div>
               <button className='btn1'>Get it on chrome</button>
               </div>
               <div>
               <button className='btn2'>Get it on Firefox</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header