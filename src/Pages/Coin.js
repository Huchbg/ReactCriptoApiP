import { useParams } from "react-router-dom"

export const Coin = () =>{
    const { id }=useParams()

    return <h1>Coin Page {id}</h1>
}