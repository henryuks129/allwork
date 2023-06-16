import React from 'react'
import '../styles/Dynamic.css'

const Dynamic = () => {
    let gender = 'Male'
    let random =Math.random()
  return (
    <div className='dynamic-container'>
        <h2>Dynamic component</h2>
        <h2> {gender} </h2>
        <h4> {random} </h4>
    </div>
  )
}

export default Dynamic