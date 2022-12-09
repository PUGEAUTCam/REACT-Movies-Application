import styled from "styled-components";

export const ImgHeader = styled.img`
    margin: 0px auto;
    width: 100%;
    object-fit: cover;
    height: 285px;
`

export const ContainerImg = styled.div`
    border-radius: 12px;
    overflow: hidden;
        @media all and (max-width: 1624px){
           border-radius: 0px;
        }
`