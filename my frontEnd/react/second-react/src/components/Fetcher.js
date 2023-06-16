import React, {useEffect,useState} from 'react';

const Fetcher = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=> res.json())
        .then((resp)=> setData(resp))
        .catch((e)=> console.log(e))
        console.log('useEffect 1');
    },[])
    console.log('useEffect 2');

  return (
    <div className='container bg-danger text-white'>
        <h2>Fetcher component</h2>
        {data.map((datum)=>{
            return(
                <div key={datum.id}>
                    <h2> {datum.title} </h2>
                    {/* <img src={datum.image} alt="" />
                    <h4> {datum.rating.count} </h4> */}
                </div>
            )
        })}
    </div>
  )
}

export default Fetcher