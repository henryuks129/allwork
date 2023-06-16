import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container'>
        <h2>oops! wrong url</h2>
        <p>Please go to home page</p>
        <Link to=''></Link>
    </div>
  )
}

export default Error