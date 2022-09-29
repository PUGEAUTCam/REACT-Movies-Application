import React from 'react';
import { BackdropImg, ContainerTitle, SynopsisText, Tagline } from './style';

const ContainerMoviePage = ({ dataMovie }) => {

    const imagePoster = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovie.poster_path}`
    const imageBackdrop = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dataMovie.backdrop_path}`



    return (
        <div>
            <div>
                <BackdropImg src={imageBackdrop} alt={dataMovie.title} />
                <Tagline>{dataMovie.tagline}</Tagline>

            </div>


            <ContainerTitle>
                <img src={imagePoster} alt={dataMovie.title} style={{ position: 'sticky' }} />
                <SynopsisText> {dataMovie.overview}</SynopsisText>
            </ContainerTitle>

        </div>

    );
};

export default ContainerMoviePage;
