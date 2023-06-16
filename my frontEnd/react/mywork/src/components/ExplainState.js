import React,{useState} from 'react';
// import { useState } from 'react';

const ExplainState = () => {
    // console.log(useState(2));
    // destructuring
    const [age,setAge] = useState(100)
    function handleAge() {
        if(age === 100) {
            setAge(200)
        }else {
            setAge(100)
        }
    }
  return (
    <div className='container'>
        <div className='bg-danger text-white'>
            <h2>ExplainState component</h2>
            <p> {age} </p>
            <button onClick={handleAge}>click to change the age</button>
        </div>
    </div>
  )
}

export default ExplainState