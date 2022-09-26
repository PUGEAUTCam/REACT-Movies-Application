import React from 'react';
import { BackdropImg, ContainerSynopsis, ContainerTitle, Tagline } from './style';

const ContainerMoviePage = ({ dataMovie }) => {

    const imagePoster = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovie.poster_path}`
    const imageBackdrop = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dataMovie.backdrop_path}`





    return (
        <div>
            <ContainerTitle>
                <img src={imagePoster} alt={dataMovie.title} style={{ borderRadius: 25 }} />
                <div>
                    <h1 style={{ fontSize: 40 }}>{dataMovie.title}</h1>
                </div>
            </ContainerTitle>

            <ContainerSynopsis>
                <p> {dataMovie.overview}</p>
                <p style={{ fontSize: 16 }}> {dataMovie.release_date}</p>
            </ContainerSynopsis>

            <div>
                <Tagline>{dataMovie.tagline}...</Tagline>
                <BackdropImg src={imageBackdrop} alt={dataMovie.title} />
            </div>


        </div>
    );
};

export default ContainerMoviePage;