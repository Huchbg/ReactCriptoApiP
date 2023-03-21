//https://api.coingecko.com/api/v3/coins/{id}
import { useParams } from "react-router-dom"

export const Coin = () =>{
    const { id }=useParams()

    return <h1>Coin Page {id}</h1>
}