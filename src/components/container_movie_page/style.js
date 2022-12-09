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
    padding-top: 2%;
    @media all and (max-width: 800px){
      font-size: 16px;
    }

`

export const ContainerTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-top: 12%;
    @media all and (max-width: 1200px){
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 32%;
    }
`

export const ImgMovie = styled.img`
    position: sticky;   
    @media all and (max-width: 1200px){
        width: 226px;
    }
`

export const SynopsisText = styled.p`
    font-size: 22px;
    color: white;
    line-height: 38px;

    text-align: justify;
    @media all and (max-width: 1200px){
        padding: 33px 0px;
        font-size: 16px;
    }
`
//Like

export const ContainerSynopsisTitle = styled.div`
    padding: 0px 51px;
    @media all and (max-width: 1200px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const LikeContainer = styled.div`
    display: flex;
    align-items: center;
    width: 167px;
    justify-content: space-around;
    padding: 25px 0px;
    position: sticky;
        
`

