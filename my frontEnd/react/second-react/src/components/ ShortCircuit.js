import React,{ useState } from 'react'
import '../styles/ShortCircuit.css';
import SeeMore from './SeeMore';

const  ShortCircuit = () => {
    const [data, setData] = useState('')
    const firstData = data || 'Hello class';
    const secondData = data && 'Hello guys';
    console.log(firstData);
    console.log(secondData);
  return (
    <div className='short-container'>   
        <h2>Short Circuit component</h2>
        <h2> {firstData} </h2>
        <h1> {secondData} </h1>

        <form action="">
            <label htmlFor="">Email</label>
            <input type="text" />
            <br />
            <label htmlFor="">Password</label>
            <input type="text" />
        </form>

        {data && <SeeMore/>}
        <button onClick={()=> setData(!data)}> {data ? 'hide' : 'show'} </button>
    </div>
  )
}

// function SeeMore(){
//     return(
//         <div>
//             <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eum?</h2>
//         </div>
//     )
// }

export default  ShortCircuit