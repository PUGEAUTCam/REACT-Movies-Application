import React from 'react';
import Movies from '../../components/movies';
import Navigation from '../../components/navigation';
import { ContainerImg, ImgHeader } from './style';

const Home = (props) => {
    return (
        <>
            <Navigation />
            <ContainerImg>
                <ImgHeader
                    src="./fond4.jpg"
                    alt="fond ticket de cinema"
                />
            </ContainerImg>
            <Movies />
        </>
    );
};

export default Home;