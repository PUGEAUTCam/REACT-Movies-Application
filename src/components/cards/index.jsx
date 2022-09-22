import React from 'react';
import { ContainerCover, Image, Link, Title } from './style';



const CoverMovie = ({ movie }) => {

    const imageSrc = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`

    return (
        <Link>
            <ContainerCover>
                <Image src={imageSrc} alt={movie.title} />
                <Title>{movie.title}</Title>
            </ContainerCover>
        </Link>
    );
};

export default CoverMovie;
