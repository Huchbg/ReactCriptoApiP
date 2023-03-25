import styled from "styled-components"
import { Link } from "react-router-dom"

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const Wraper = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const RowWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: 120px;
  padding: 5px 0;
  background-color: #4ee1ad;
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 100ms ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`
