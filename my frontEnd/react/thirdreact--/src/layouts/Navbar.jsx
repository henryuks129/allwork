import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container bg-dark'>
       <nav className='d-flex justify-content-between text-light'>
        <h2>Henry</h2>
       <ul className='d-flex justify-content-between list-unstyled'>
            <li className='mx-3'> <Link to='/' className='text-decoration-none'>Home</Link> </li>
            <li className='mx-3'> <Link to='/About' className='text-decoration-none'>About</Link> </li>
            <li className='mx-'> <Link to='/Product' className='text-decoration-none'>Products</Link> </li>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar