import {Wraper ,CoinTitle,RowWraper,RowElement,CoinImage,ImageDiv} from'./elements'

export const CoinBox =(props)=>{
    
    return (
    <Wraper>
        <ImageDiv>
            <CoinImage src={props.img}/>
        </ImageDiv>
        <CoinTitle>{props.name}</CoinTitle>
        
        <RowWraper>
            <RowElement bold={true}>Symbol :</RowElement> 
            <RowElement>{props.symbol}</RowElement> 
        </RowWraper>
        <RowWraper>
            <RowElement bold={true}>Current Price :</RowElement> 
            <RowElement>$ {props.price.toLocaleString('en-US')}</RowElement> 
        </RowWraper>
        <RowWraper>
            <RowElement bold={true}>Market Cap :</RowElement> 
            <RowElement>$ {props.MarketCap.toLocaleString('en-US')} </RowElement> 
        </RowWraper>
        <RowWraper>
            <RowElement bold={true}>Total Volume :</RowElement> 
            <RowElement>$ {props.TotalVolume.toLocaleString('en-US')} </RowElement> 
        </RowWraper>
        <RowWraper>
            <RowElement bold={true}>24hr High :</RowElement> 
            <RowElement color='green'>$ {props.High24.toLocaleString('en-US')}</RowElement> 
        </RowWraper>
        <RowWraper>
            <RowElement bold={true}>24hr Low :</RowElement> 
            <RowElement color='red'>$ {props.Low24.toLocaleString('en-US')}</RowElement> 
        </RowWraper>
        
    </Wraper>
    )
}