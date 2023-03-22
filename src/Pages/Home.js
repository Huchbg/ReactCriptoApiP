import { useState } from "react"
import { useQuery } from"@tanstack/react-query"
import { Loader,Wraper,RowWraper } from "../Components/elements"
import {  InputBox  } from"../Components/InputBox/InputBox"
import {Row} from"Components/Row/Row"
export  const  Home = () => {
    const [valueOfInput,SetInputText]=useState("")
    const { data,isLoading } =useQuery(["coinsData"],() =>{
        return fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1").then(res =>res.json()).then(data=> data)
    })
    
    if(isLoading) return <Loader><span className="spin">Loading . . .</span></Loader>
    
    
    return (
       <Wraper>
        <InputBox SetInputText={SetInputText} />
         
        <RowWraper>
            {data.map(coin =>{
                return <Row key={coin.id} img={coin.image} name={coin.name} symbol={coin.symbol} id={coin.id} price={coin.current_price} percent={coin.price_change_percentage_24h} Totprice={coin.market_cap} />
            })}
        </RowWraper>

       </Wraper>
    )
}