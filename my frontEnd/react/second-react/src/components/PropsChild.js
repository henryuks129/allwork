import React from 'react'

const PropsChild = ({header,country}) => {
    // let head = props.header
  return (
    <div>
        <h2>Child component</h2>
        <h2> {header} </h2>
        <h1> {country} </h1>
    </div>
  )
}

export default PropsChild