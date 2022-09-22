import styled from 'styled-components';

export const ContainerCover = styled.div`
    width: 236px;
    height: 337px;
    border-radius: 35px;
    overflow: hidden;
    position: relative; 
    transition: transform 300ms; 
 
        &:hover{
            opacity: 0.8;
            box-shadow: 0px 11px 22px -17px rgba(0,0,0,0.75);
            transform: scale(1.02);
        }

`;

export const Image = styled.img`
    border-radius: 35px;
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
    backdrop-filter: blur(5px);

        &:hover {
            opacity: 1;
            
        }

`;

export const Link = styled.a`
    cursor: pointer;
`;



