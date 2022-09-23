import React from 'react';

const ContainerMoviePage = ({ dataMovie }) => {

    const imagePoster = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovie.poster_path}`
    const imageBackdrop = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovie.backdrop_path}`





    return (
        <div>

            <img src={imagePoster} alt={dataMovie.title} />
            {/* <img src={imageBackdrop} alt={dataMovie.title} /> */}
            <h2>{dataMovie.title}</h2>
            <p>{dataMovie.overview}</p>
            <p>{dataMovie.release_date}</p>
            <p>{dataMovie.tagline}</p>











        </div>
    );
};

export default ContainerMoviePage;