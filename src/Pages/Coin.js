//https://api.coingecko.com/api/v3/coins/{id}
import { useEffect, useState } from "react"
import { Loader } from "../Components/elements"
import { Link, useParams } from "react-router-dom"
import { useFetch } from "CustomHooks/useFetch"
import {CoinBox} from "Components/CoinBox/CoinBox"

export const Coin = () =>{
    const [destroy,SetDestroy]=useState(false)
    const { id }=useParams()
    const {data,isLoading}=useFetch(`https://api.coingecko.com/api/v3/coins/${id}`,["coinsData","coin"])
    
    

    if(isLoading) return <Loader><span className="spin">Loading . . .</span></Loader>
    if(destroy) return null
    
    return <>
            <Link onClick={()=>{SetDestroy(true)}} to="/">destroy</Link>
            <CoinBox name={data.name} 
                symbol={data.symbol}
                price={data.market_data.current_price.usd}
                MarketCap={data.market_data.market_cap.usd} 
                TotalVolume={data.market_data.total_volume.usd}
                High24 ={data.market_data.high_24h.usd}
                Low24 ={data.market_data.low_24h.usd}
                img={data.image.large}
                />
         </>
}