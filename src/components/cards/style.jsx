import styled from 'styled-components';

export const ContainerCover = styled.div`
    width: 236px;
    overflow: hidden;
    position: relative; 
    transition: transform 300ms; 
 
        &:hover{
            opacity: 0.8;
            box-shadow: 0px 11px 22px -17px rgba(0,0,0,0.75);
            transform: scale(1.02);
        }

        @media all and (max-width: 570px){
            width: 169px;
        }

`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
        
`
export const Title = styled.h3`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    color: white;
    font-size: 24px;
    opacity: 0;
    transition: transform 200ms;
    backdrop-filter: blur(10px);

        &:hover {
            opacity: 1;
            
        }

`;

export const Link = styled.a`
    cursor: pointer;
`;

export const PopularityP = styled.p`
    position: absolute;
    top: 6px;
    right: 2px;
    color: white;
    border: 2px solid white;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    text-align: center;
    font-weight: bold;
    padding-top: 6px;
    font-size: 14px;
    background-color: black;
    @media all and (max-width: 570px){
        width: 30px;
        height: 30px;
        border-radius: 15px;
        font-size: 12px;
    }
`



