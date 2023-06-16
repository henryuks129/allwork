import React, {useState} from 'react'
import '../styles/StateReExplain.css'

const StateReExplain = () => {
    const [name, setName] = useState('Henry');
    // const [gender, setGender] = useState('female')
    // const [traineeName, setTraineeName] = useState('Christy')
    const [trainee, setTrainee] = useState({
        name: 'Christy',
        gender: 'female'
    })

    // let name = 'Henry'
    function handleName(studentName){
        // let comment = `${studentName} is not in class today`
        // console.log('christy');
        // console.log(comment);
        setName('Christy')
        if (name === 'Henry'){
            setName('Christy')
        }else{
            setName('Henry')
        }
    }
    let handleGender = ()=>{
        // setGender('male')
        // setTraineeName('Henry')
        // setTrainee({...trainee, name: 'Henry'})
        if (trainee.name === 'Christy' && trainee.gender === 'female'){
            setTrainee({name:'Henry', gender:'male'})
        }else{
            setTrainee({name:'Christy', gender:'female'}) 
        }
    }
  return (
    <div className='container'>
        <h2>Explaining usestate again</h2>
        <h2>{name}</h2>
        {/* <button onClick={()=>handleName('Biola')}>click to change</button> */}
        <button onClick={handleName}>click to change name</button>
        <h1>{trainee.name} is a {trainee.gender}</h1>
        <button onClick={handleGender}>click to get state</button>
    </div>
  )
}

export default StateReExplain