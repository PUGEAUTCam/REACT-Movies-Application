import styled from 'styled-components';


export const LabelRadio = styled.label`
    padding-left: 13px;
    font-family: monospace;
    font-size: 26px;
    font-weight: 500;
    color: white;
    @media all and (max-width: 768px){
        font-size: 24px;
    }
`
export const ListRadio = styled.ul`
    display: flex;
    justify-content: space-around;
    padding-left: 0px;
    margin: 65px 0px;
    @media all and (max-width: 570px){
        flex-direction: column;
        height: 157px;
        align-items: center;
    }

`

//Container movies
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 51px 43px;

    @media all and (max-width: 570px){
        gap: 22px 0px;
    }
`;

