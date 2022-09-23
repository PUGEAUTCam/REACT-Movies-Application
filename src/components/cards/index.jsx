import React from 'react';
import { ContainerCover, Image, Link, Title, PopularityP } from './style';



const CoverMovie = ({ movie }) => {

    const imageSrc = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`

    const handleClick = () => {
        window.location.replace(`/movie/?movie=${movie.id}`)
    }

    return (
        <Link href='#' onClick={handleClick}>
            <ContainerCover>
                <Image src={imageSrc} alt={movie.title} />
                <Title>{movie.title}</Title>
                <PopularityP>{movie.vote_average}</PopularityP>
            </ContainerCover>
        </Link>
    );
};

export default CoverMovie;
