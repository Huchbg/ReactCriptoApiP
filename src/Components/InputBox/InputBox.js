import { StyledInputBox, StyledInput, StyledButton } from "./elements"
import MyImage from "imgs/refresh.png"
import { useRef } from "react"

export const InputBox = ({ SetInputText }) => {
  const inputRef = useRef()
  return (
    <StyledInputBox>
      <StyledInput
        type="text"
        ref={inputRef}
        placeholder="Search.."
        onChange={(event) => {
          SetInputText(event.target.value.toLocaleLowerCase())
        }}
      />
      <StyledButton
        onClick={() => {
          inputRef.current.value = ""
          SetInputText("")
        }}
      >
        <img src={MyImage} alt="img" />
      </StyledButton>
    </StyledInputBox>
  )
}
