import React from 'react'

const Click = () => {
    let Age = 30
    function handleClick() {
        console.log('you clicked me');
    }
    let handleNewClick = function() {
        console.log('you don run am again');
    }
    function handleClickAgain(name) {
        alert(`hi christy my name is ${name}`);
    }
    function handleAge() {
        Age = 100
        console.log(Age);
    }
  return (
    <div className='bg-primary'>
    <div className='container'>
        <h1>Click events in react</h1>
        <button className='btn btn-outline-danger btn-success' onClick={handleClick}>click me</button>
        <button onClick={handleNewClick}>click for re-explanation</button>
        <button onClick={()=>handleClickAgain('henry')}>please click me</button>
    </div>
    {/* ========= */}
    <p className='text-light'> {Age} </p>
    <button onClick={handleAge}>click to change age</button>
    </div>
  )
}

export default Click