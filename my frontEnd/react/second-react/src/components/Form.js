import React,{ useState } from 'react'

const Form = ({sam}) => {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        console.log('Hello World');
        console.log(name);
        console.log(email);
        if(name && email){
            setName('')
            setEmail('')
        }
        if(!name){
            setError(!error)
        }
    }
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center bg-primary'>
        <h2>Controlled input</h2>
        <h1> {sam} </h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name :</label>
            <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            {error && <p>please fill name</p>}
            <br />
            <br />
            <label htmlFor="">Email :</label>
            <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            {/* <input type="submit" value="click to submit"/> */}
            <button>Submit</button>
        </form>
        <h2>{name}</h2>
        <h2>{email}</h2>
    </div>
  )
}

export default Form