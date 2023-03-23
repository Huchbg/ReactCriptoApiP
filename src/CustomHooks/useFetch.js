import { useQuery } from"@tanstack/react-query"

export const useFetch=(url,key) =>{

    const { data,isLoading } =useQuery([...key],() =>{
        return fetch(url).then(res =>res.json()).then(data=> data)
    })

    return {data ,isLoading}
}