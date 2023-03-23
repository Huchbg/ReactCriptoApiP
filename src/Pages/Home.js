import { useState,useEffect } from "react"
import { useFetch } from "CustomHooks/useFetch"
import { Loader,Wraper,RowWraper } from "../Components/elements"
import {  InputBox  } from"../Components/InputBox/InputBox"
import { Row } from"Components/Row/Row"


export  const  Home = () => {
    const [stateOfFiltered,SetFilteredState]=useState(true)
    const [valueOfInput,SetInputText]=useState("")
    const [filteredData,SetFilteredDtata]=useState([])
    
    const {data,isLoading}=useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",["coinsData"])

    
    useEffect(() => {
        if(!isLoading){
            const FilteredDatatArray=data.filter(coin => coin.name.toLocaleLowerCase().includes(valueOfInput))
            SetFilteredDtata([...FilteredDatatArray])
            if(stateOfFiltered){
                SetFilteredState(false)
            }
        }

    },[valueOfInput,data]);

    
    if(isLoading) return <Loader><span className="spin">Loading . . .</span></Loader>
    
   
    
    
    return (
       <Wraper>
        <InputBox SetInputText={SetInputText}/>
         
        <RowWraper>
            { stateOfFiltered ? data.map(coin =>{
                return <Row key={coin.id} img={coin.image} name={coin.name} symbol={coin.symbol} id={coin.id} price={coin.current_price} percent={coin.price_change_percentage_24h} Totprice={coin.market_cap} />
            }):filteredData.map(coin =>{
                return <Row key={coin.id} img={coin.image} name={coin.name} symbol={coin.symbol} id={coin.id} price={coin.current_price} percent={coin.price_change_percentage_24h} Totprice={coin.market_cap} />
            })}
        </RowWraper>
       </Wraper>
    )
}