import React, {useState} from 'react'
import '../styles/List.css'
import { data } from './db'

const List = () => {
    const [packages] = useState(data)
  return (
    <div className='container '>
      <h2>Outputing list in react</h2>
      <h3>Choose a package</h3>
      <div className='package w-100'>
        {packages.map((pack) => {
            const {title,price1,price2,price3,price4,id} = pack
          return (
            <div className='package-inner' key={id}>
              <h4>{title}</h4>
              <p> {price1} </p>
              <p> {price2} </p>
              <p> {price3} </p>
              <p> {price4} </p>
              <button>choose a plan</button>
            </div>
          )
        })}
        </div>
              {/* <div className='package w-100'>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
            <div className='package-inner'>
                <h4>standard</h4>
                <p>#20,000</p>
                <p>#20,000</p>
                <p>#20,000</p>
                <button>choose plan</button>
            </div>
           

        </div> */}
    </div>
  )
}

export default List