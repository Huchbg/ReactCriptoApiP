import { StyledInputBox,StyledInput } from"./elements"


export const InputBox=({SetInputText})=>{
    return (
    <StyledInputBox>
        <StyledInput type="text"  placeholder="Search.." onChange={(event)=>{SetInputText(event.target.value)}}/>
        <button><img src="imgs/refresh.png" alt="img refresh" /></button>
    </StyledInputBox>
    )
}