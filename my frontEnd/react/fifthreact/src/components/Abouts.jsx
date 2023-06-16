import React,{ useState,useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { Link } from 'react-router-dom';


const Abouts = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [figures,setFigures] = useState([])
    let url = 'https://example-data.draftbit.com/sneakers?_limit=10'
    let resolve = async () =>{
        try{
            setIsLoading(true)
            const resolved = await fetch(url)
            const response = await resolved.json()
            console.log(response);
            setFigures(response)
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        resolve()
    },[])
  return (
    <div>
        <h2>About component</h2>
        {isLoading && <SyncLoader/>}
        <div>
            {figures.map((figure)=>{
                const {id,brand,colorway,gender,media} = figure;
                return(
                    <div key={id} >
                      <Link to={`/SingleProduct/${id}`} >
                      <h2> {brand} </h2>
                        <h3> {colorway} </h3>
                        <img src={media.imageUrl} alt="" className='w-50' />
                        <h3> {gender} </h3>
                      </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Abouts