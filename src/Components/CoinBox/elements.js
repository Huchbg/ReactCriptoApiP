import  styled,{css}  from "styled-components"

export const Wraper =styled.div`
    width: 500px;
    padding: 20px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: gray;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

`
export const CoinTitle=styled.h1`
    font-size: 40px;
    text-align: center;
    color: #4EE1AD ;
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const RowWraper=styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;

`
export const RowElement=styled.span`
    font-size: 20px;
    ${props => {
        if(props.color==="green"){
            return css`color:#4EE1AD;`
        }else if(props.color==="red"){
            return css`color:red;`
        }else if(props.bold===true){
            return css`
                font-weight:bold;
                font-size: 25px;
                `
        }else{
            return css``
        }
    }}

    width:50%;
`

export const CoinImage=styled.img`
    width: 30%;
    justify-content: center;
`

export const ImageDiv=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`