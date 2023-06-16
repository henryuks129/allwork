import React,{ useState,useEffect } from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from 'react-router-dom';

const About = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [deals,setDeals] = useState([])
    let url = 'https://api.coinlore.net/api/tickers/?start=0&limit=20'
    let fetcher = async ()=> {
        try{
            setIsLoading(true)
            const fetched = await fetch(url)
            const response = await fetched.json()
            console.log(response.data);
            setDeals(response.data)
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetcher()
    },[])
  return (
    <div>
        {isLoading && <MoonLoader/>}
        <div>
            {/* {deals.map((deal)=>{
                return(
                    <div>
                        <h2> {deal.symbol} </h2>
                    </div>
                )
            })} */}
            {deals.map((deal)=>{
                const {id,symbol,name,rank} = deal
                return(
                    <div key={id}>
                        <h3> {symbol.slice(0,7)} </h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default About