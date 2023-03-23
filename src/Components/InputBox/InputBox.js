import { StyledInputBox,StyledInput,StyledButton } from"./elements"
import MyImage from "imgs/refresh.png"

export const InputBox=({SetInputText })=>{
    return (
    <StyledInputBox>
        <StyledInput type="text"  placeholder="Search.." onChange={(event)=>{
            
            SetInputText(event.target.value.toLocaleLowerCase())
            }}/>
        <StyledButton><img src={MyImage} alt="img" /></StyledButton>
    </StyledInputBox>
    )
}