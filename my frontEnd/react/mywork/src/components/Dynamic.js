import React from 'react'

const Dynamic = () => {
    let sex = 'male'
    let age = 30
    let friends = ['Sam','Kruz','Ejiro','Henry']
    let [zero,one,two,three] = friends
    let fbLink = 'https://ww.facebook.com'
    let random = Math.ceil(Math.random() * 10)
  return (
    <div className='container text-center'>
        <h1> {sex} </h1>
        <h2> {age} </h2>
        <h2> {friends.join('-')} </h2>
        <h3> {zero} </h3>
        <a href={fbLink}>
            facebook
        </a>
        <h2> {random} </h2>
    </div>
  )
}

export default Dynamic

// all your logic should be between the curly braces and the return keyword