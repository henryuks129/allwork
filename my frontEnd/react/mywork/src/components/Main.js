import React from 'react'
import pic from '../assets/pexels-pixabay-206359.jpg'

const Main = () => {
  return (
    <div>
        <p style={{backgroundColor: 'red', color: 'blue'}}>main component</p>
        <img src={pic} alt=""/>
    </div>
  )
}

export default Main