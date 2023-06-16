import React, { useState } from 'react'
import '../styles/List.css'
import { data,studentData } from './db'
// import { studentData } from '../db';

const List = () => {
    const [packages] = useState(data)
  const [trainess, setTrainess] = useState(studentData)
  const [count, setCount] = useState(0)
  //   console.log(packages);
  console.log(studentData)
  function handleClearAll() {
    setTrainess([])
  }
  //   function handleInc() {
  //     setCount((prev)=> prev + 1 )
  //   }
  function handleRefresh() {
    window.location.reload()
  }
  function handleRemoveItem(idx) {
    let filteredTrainee = trainess.filter((removedTrainee)=> removedTrainee.id !== idx)
    setTrainess(filteredTrainee)
  }
  return (
    <div className='list-container'>
      <h2>List componenet</h2>
      <div className='package'>
        {packages.map((pack) => {
          const { id, title, price1, price2, price3, price4 } = pack
          return (
            <div className='package-inner' key={id}>
              <h4> {title} </h4>
              <p> {price1} </p>
              <p> {price2} </p>
              <p> {price3} </p>
              <p> {price4} </p>
              <button className='btn'>choose a plan</button>
            </div>
          )
        })}
      </div>
      <div>
        {trainess.map(function (trainee) {
          const { name, age, color, id, img } = trainee
          return (
            <div key={id}>
              <h2> {name} </h2>
              <h4> {age} </h4>
              <p> {color} </p>
              <img src={img} alt='' />
              <button onClick={()=>handleRemoveItem(id)}>
                click to remove trainee
              </button>
              {/* <div><button>clear all</button></div> */}
            </div>
          )
        })}
        {/* <button onClick={handleClearAll} className='btn'>
          {trainess.length === 0 ? 'refresh' : 'clear all'}
        </button> */}
        {/* ================================= */}
        {/* {trainess.length === 0 ? (
          <button onClick={() => window.location.reload()}>refresh</button>
        ) : (
          <button onClick={handleClearAll}>clear all</button>
        )} */}
        {/* ================================= */}
        {trainess.length === 0 ? (
          <button onClick={handleRefresh}>refresh</button>
        ) : (
          <button onClick={handleClearAll}>clear all</button>
        )}
      </div>

      <h2>{count} </h2>
      {/* <button onClick={()=>setCount((prev)=> prev + 1)}>increase</button> */}

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