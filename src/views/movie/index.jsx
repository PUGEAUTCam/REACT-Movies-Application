import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContainerMoviePage from '../../components/container_movie_page';
import Navigation from '../../components/navigation';


const MoviePage = () => {
    let params = new URLSearchParams(window.location.search);
    const idMovie = params.get('movie');

    const [dataMovie, setDataMovie] = useState(null);


    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=cf0710105c7cebaf3b51cf0e45affb42&language=en-FR`)
            .then((res) => setDataMovie(res.data))
    }, []);

    

    return (
        <div>
            <Navigation />
            {
                dataMovie && 
                    <ContainerMoviePage dataMovie={dataMovie} />
            }
        </div>
    );
};

export default MoviePage;