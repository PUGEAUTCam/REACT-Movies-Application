import styled from 'styled-components';

export const BackdropImg = styled.img`
    opacity: 0.2;
    width: 100%;
    position: absolute;
    left: 0;

`

export const Tagline = styled.p`
    font-size: 22px;
    font-family: monospace;
    color: white;
    text-align: center;
    padding-top: 1%;
    @media all and (max-width: 800px){
      font-size: 16px;
    }

`

export const ContainerTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-top: 16%;
    @media all and (max-width: 1200px){
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 32%;
    }

`

export const SynopsisText = styled.p`
    font-size: 22px;
    color: white;
    line-height: 38px;
    padding: 0px 51px;
    text-align: justify;
    @media all and (max-width: 1200px){
        padding: 36px 51px;
        font-size: 16px;
    }

`
