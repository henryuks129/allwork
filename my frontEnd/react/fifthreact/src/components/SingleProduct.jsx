import React from 'react';
import { Routes, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id} = useParams();

    // const {id} = Routes
    // let {category,title} = id
    // console.log(id);
    // console.log(id.title);

  return (
    <div className='container'>
        <h2> {id} </h2>
    </div>
  )
}

export default SingleProduct