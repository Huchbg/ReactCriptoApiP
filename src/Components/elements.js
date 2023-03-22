import  styled  from "styled-components"

export const Loader=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

export const Wraper=styled.div`
    width: 80%;
    max-width: 1280px;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
`
export const RowWraper=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:20px;
`
