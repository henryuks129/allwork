import React from 'react';
import PropsChild from './PropsChild';

const PropsParent = ({country}) => {
    let name = 'frank'
  return (
    <div>
        <h2>Parent Components</h2>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt iste vero voluptas, rerum assumenda quaerat ex et molestiae accusamus?</h2>
        <h4> {name} </h4>
        <h4> {country} </h4>

        <PropsChild header = {name}
        country = {country} />
    </div>
  )
}

export default PropsParent