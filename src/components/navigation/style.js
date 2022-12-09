import styled from 'styled-components';

export const ContainerNavigation = styled.div`
    padding: 45px 19px;
    display: flex;
    justify-content: space-between;
    margin: 0px 15px;
    @media all and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 215px;
    }
`

export const ImgNavigation = styled.img`
    width: 158px;
`

export const TitleNavigation = styled.h1`
    font-size: 44px;
        @media all and (max-width: 570px){
            font-size: 39px;
        }
`


