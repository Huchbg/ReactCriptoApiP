import styled,{css} from "styled-components"
import {Link} from "react-router-dom";

export const StyledRow=styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    padding: 10px 0;
`
export const StyledImage=styled.img`
    width: 5%;
  
`
export const StyledTitle=styled.h3`
    width: 20%;
`
export const StyledSpan=styled.span`
    width: 10%;
    text-transform: uppercase;
    ${props => {
        if(props.color==="green"){
            return css`color:#4EE1AD;`
        }else if(props.color==="red"){
            return css`color:red;`
        }else{
            return css``
        }
    }}
`

export const StyledPrice=styled.span`
    width: 20%;
    text-transform: uppercase;
`
export const StyledPriceBig=styled.span`
    width: 20%;
    text-transform: uppercase;
`

export const StyledLink=styled(Link)`
    text-decoration: none;
    color: white;
    width: 120px;
    padding: 5px 0;
    background-color: #4EE1AD;
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
    border-radius: 10px;
    transition: 100ms ease-in-out;
    &:hover{
        opacity: 0.9;
    }
`