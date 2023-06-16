import React from 'react'
import '../styles/Main.css'
import tab from '../assets/illustration-features-tab-1.svg'

const Main = () => {
  return (
    <div className='main'>
        <div className='main-background'></div>
        <div className='main-image'>
            <img src={tab} alt="" />
        </div>
    </div>
  )
}

export default Main