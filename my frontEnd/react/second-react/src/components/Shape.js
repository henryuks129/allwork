import React, { useState } from 'react'
import '../styles/Shape.css'
  
const Shape = () => {
    const [naCircle,setNaCircle] = useState(true)
  return (
    <div>
        <h2>Shape component</h2>
        <div className={naCircle ? 'circle' : 'square'}>
            <button onClick={()=> setNaCircle(!naCircle)}>click</button>
        </div>
    </div>
  )
}

export default Shape