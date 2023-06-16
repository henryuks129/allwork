import React,{useState,useEffect} from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

const Product = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [num,setNum] = useState(0)
    const [data,setData] = useState([])
    let apiUrl = 'https://fakestoreapi.com/products'
    let fetcher = async () =>{
      try{
        setIsLoading(true)
        let fetchedData =await fetch(apiUrl)
        let response = await fetchedData.json()
        console.log(response);
        setData(response) 
      } catch(error){
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    }
  
    useEffect(()=>{
    //   setTimeout(fetcher,7000)
      fetcher()
    },[])
    // useEffect(()=>{
    //   fetch()
    //   .then((res) => res.json())
    //   .then((response) => console.log(response))
    //   .catch((e) => console.log(e))
    //   // console.log('inside useEffect hook');
    // },[])
    // console.log('inside useEffect hook');
    return (
      <div>
          <h2>Product component</h2>
          <h3> {isLoading && <PacmanLoader/>} </h3>
          <div>
            {data.map((datum)=>{
              const {id,title,image,category} = datum 
              return(
                <div key={id} className='container'>
                  <h2> {title} </h2>
                  <img src={image} alt="" className='w-50' />
                  <p> {category} </p>
                </div>
              )
            })}
          </div>
          <h4> {num} </h4>
          <button onClick={()=> setNum((prev)=> prev + 1)}>click</button>
      </div>
    )
}

export default Product